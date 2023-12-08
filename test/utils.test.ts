import { expect, it } from "vitest";
import { getCurrentTime, sleep, toArray } from "../src/utils";
import { replaceOption } from "../src/index";
import { randomInt } from "crypto";
it("should be ok", async () => {
  const t = await sleep(5)
  expect(t).toMatchInlineSnapshot('undefined')
})



it("should be ok", () => {
  const input1 = "input"
  const input2 = ["input", "input2"]
  const numInput = 2
  const numInput2 = 2
  expect(toArray(input1)).toStrictEqual(["input"])
  expect(toArray(input2)).toStrictEqual(
    [
      "input",
      "input2",
    ]
  )
  expect(toArray(numInput)).toStrictEqual(
    [
      2,
    ]
  )
  expect(toArray(numInput2)).toStrictEqual(
    [
      2,
    ]
  )
})


// it("should be ok", () => {
//   expect(getCurrentTime()).toMatchInlineSnapshot('"2023/11/25 17:52:23"')
// })


// it("should be ok", () => {
//   expect(replaceOption(option, "nextId")).toMatchInlineSnapshot(`
//     {
//       "data": {
//         "nextId": "nextId",
//         "priceFilters": [
//           "70000-0",
//         ],
//         "sortType": "PRICE_ASC",
//       },
//       "headers": {
//         "Accept": "application/json, text/plain, */*",
//         "Accept-Encoding": "gzip, deflate, br",
//         "Accept-Language": "zh-CN,en-US;q=0.7,en;q=0.3",
//         "Connection": "keep-alive",
//         "Content-Type": "application/json",
//         "Cookie": undefined,
//         "Origin": "https://mall.bilibili.com",
//         "Referer": "https://mall.bilibili.com/neul-next/index.html?page=magic-market_index",
//         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0",
//       },
//       "method": "POST",
//       "url": "https://mall.bilibili.com/mall-magic-c/internet/c2c/v2/list",
//     }
//   `)
// })