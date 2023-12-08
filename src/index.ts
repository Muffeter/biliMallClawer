import axios from 'axios'
import { AxiosRequestConfig } from 'axios'
import { item } from './type'
import { getCurrentTime, log, sleep, toArray } from './utils'
import { randomInt } from 'node:crypto'
import { writeFile } from 'node:fs'
import 'dotenv/config'
import { pluginManager } from './plugin'
import { registerAll } from '../plugins/register'
let cookies: string[] = []
registerAll()

export const replaceOption = (prevOption: AxiosRequestConfig<any>, nextId: string) => {
	return { ...prevOption, headers: { ...prevOption.headers, Cookie: cookies[randomInt(2)] }, data: { ...prevOption.data, nextId } }
}

//main search func.
export const searchItem = async (requestOption: AxiosRequestConfig<any>, requestTime: number, sleepTime: number) => {
	let currentOption = requestOption
	let itemLst: item[] = []
	for (let time = 0; time < requestTime; time++) {
		await sleep(sleepTime)
		log(`request...(${time}/${requestTime})`);
		try {
			const res = await axios.request(currentOption)
			const { data, nextId }: { data: item[], nextId: string } = res.data.data
			currentOption = replaceOption(requestOption, nextId)
			itemLst.push(...data)
		}
		catch (e) {
			log(`current: ${currentOption.headers!.Cookie}\n`)
			log(e)
		}
	}
	log(currentOption.data);
	return itemLst
}

export const filteByName = async (names: string[], itemLst: item[]) => {
	return itemLst.filter(i => names.some(name => i.c2cItemsName.includes(name)))
}

export const filteByPrice = async (price: number, itemLst: item[]) => {
	return itemLst.filter(i => i.price <= price)
}

export const searchByName = async (names: string[] | string, searchTime: number, sleepTime: number) => {
	if (!process.env.COOKIE)
		throw new Error("process.env.COOKIE is not defined")
	const cookie = process.env.COOKIE.split(",")[0]

	let option: AxiosRequestConfig<any> = {
		method: 'POST',
		url: 'https://mall.bilibili.com/mall-magic-c/internet/c2c/v2/list',
		headers: {
			'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36',
			Accept: 'application/json, text/plain, */*',
			'Accept-Language': 'zh-CN,en-US;q=0.7,en;q=0.3',
			'Accept-Encoding': 'gzip, deflate, br',
			'Content-Type': 'application/json',
			Origin: 'https://mall.bilibili.com',
			Referer: 'https://mall.bilibili.com/neul-next/index.html?page=magic-market_index',
			Cookie: cookie
		},
		data: { "priceFilters": [`${process.env.PRICE || "75000"}-0`], "nextId": null, "sortType": "PRICE_ASC" }
	};



	names = toArray(names)
	const nameFiled = await filteByName(names, (await searchItem(option, searchTime, sleepTime)))
	const sendMsg = JSON.stringify(nameFiled.map(i => ({
		"id": i.c2cItemsId,
		"Name": i.c2cItemsName,
		"Price": i.price,
	})))

	if (process.env.LOCAL === "true") {
		writeFile("./result", sendMsg, () => {
			console.log("write Ok");
		})
	} else {
		pluginManager.invoke("push", `${getCurrentTime()}-Search-${names}`, sendMsg, process.env.KEY)

	}
}
//params: 
//name: string [the name u want to search, the result item's name will include the value name]
//searchTime: number [the time u want to search]
//sleepTime: number [every request sleep time. ms]
export const handler = async function (event, context, callback) {
	if (!process.env.SEARCHITEM) {
		log("process.env.SEARCHITEM is not defined")
		callback(null, "process.env.SEARCHITEM is not defined")
		return
	}
	if (!process.env.KEY) {
		log("process.env.KEY is not defined")
		callback(null, "process.env.KEY is not defined")
		return
	}
	if (!process.env.COOKIE) {
		log("process.env.COOKIE is not defined")
		callback(null, "process.env.COOKIE is not defined")
		return
	}
	const cookiesEnv: string = process.env.COOKIE || ""
	if (cookiesEnv !== "") {
		cookies = cookiesEnv.split(",")
	}

	const searchItem = process.env.SEARCHITEM.split(",")
	const searchTime = parseInt(process.env.SEARCHTIME || "20")
	await searchByName(searchItem, searchTime, 2500)
	callback(null, "Finish");
};
// for local call
process.env.LOCAL === "true" && handler("", "", (n: null, msg: string) => {
	log(msg)
})