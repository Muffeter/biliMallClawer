import { describe, expect, it, test } from 'vitest'
import { filteByName } from '../src/index'
import { item, detailDtoList } from '../src/type'
import { stringify } from 'querystring'
import { sc_send } from '../src/serverPush'
let input: item[] = [
  {
    "c2cItemsId": 17835647491,
    "type": 1,
    "c2cItemsName": "baby",
    "detailDtoList": [
      {
        "blindBoxId": 167016276,
        "itemsId": 10194560,
        "skuId": 1000446546,
        "name": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
        "img": "//i0.hdslb.com/bfs/mall/mall/2a/cb/2acb4d51c0acbfd9ee88bf57bcbbd5f4.png",
        "marketPrice": 107000,
        "type": 1,
        "isHidden": false
      }
    ],
    "totalItemsCount": 1,
    "price": 75000,
    "showPrice": "750",
    "showMarketPrice": "1070",
    "uid": "44***0",
    "paymentTime": 0,
    "isMyPublish": false,
    "uname": "魔***",
    "uspaceJumpUrl": null,
    "uface": "https://i0.hdslb.com/bfs/face/a58ca9f8a2b2a1291e0db8a94df9068d68c5b786.jpg"
  },
  {
    "c2cItemsId": 17838645753,
    "type": 1,
    "c2cItemsName": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
    "detailDtoList": [
      {
        "blindBoxId": 166880858,
        "itemsId": 10194560,
        "skuId": 1000446546,
        "name": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
        "img": "//i0.hdslb.com/bfs/mall/mall/2a/cb/2acb4d51c0acbfd9ee88bf57bcbbd5f4.png",
        "marketPrice": 107000,
        "type": 1,
        "isHidden": false
      }
    ],
    "totalItemsCount": 1,
    "price": 83790,
    "showPrice": "837.9",
    "showMarketPrice": "1070",
    "uid": "27***3",
    "paymentTime": 0,
    "isMyPublish": false,
    "uname": "b***",
    "uspaceJumpUrl": null,
    "uface": "https://i0.hdslb.com/bfs/face/b7f42aa69d5de551974a12ea3ec5d3623f88f27e.jpg"
  },
  {
    "c2cItemsId": 17869576478,
    "type": 1,
    "c2cItemsName": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
    "detailDtoList": [
      {
        "blindBoxId": 166790739,
        "itemsId": 10194560,
        "skuId": 1000446546,
        "name": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
        "img": "//i0.hdslb.com/bfs/mall/mall/2a/cb/2acb4d51c0acbfd9ee88bf57bcbbd5f4.png",
        "marketPrice": 107000,
        "type": 1,
        "isHidden": false
      }
    ],
    "totalItemsCount": 1,
    "price": 83800,
    "showPrice": "838",
    "showMarketPrice": "1070",
    "uid": "27***9",
    "paymentTime": 0,
    "isMyPublish": false,
    "uname": "这***",
    "uspaceJumpUrl": null,
    "uface": "http://i0.hdslb.com/bfs/face/83a711a9254f767abe0936009aec63344e911bbe.jpg"
  },
  {
    "c2cItemsId": 17779775492,
    "type": 1,
    "c2cItemsName": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
    "detailDtoList": [
      {
        "blindBoxId": 166990687,
        "itemsId": 10194560,
        "skuId": 1000446546,
        "name": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
        "img": "//i0.hdslb.com/bfs/mall/mall/2a/cb/2acb4d51c0acbfd9ee88bf57bcbbd5f4.png",
        "marketPrice": 107000,
        "type": 1,
        "isHidden": false
      }
    ],
    "totalItemsCount": 1,
    "price": 83800,
    "showPrice": "838",
    "showMarketPrice": "1070",
    "uid": "34***2",
    "paymentTime": 0,
    "isMyPublish": false,
    "uname": "本***",
    "uspaceJumpUrl": null,
    "uface": "https://i1.hdslb.com/bfs/face/d809e8130b2ed2b17264a3aa4b4881e110ee6d85.jpg"
  },
  {
    "c2cItemsId": 17864944061,
    "type": 1,
    "c2cItemsName": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
    "detailDtoList": [
      {
        "blindBoxId": 166660632,
        "itemsId": 10194560,
        "skuId": 1000446546,
        "name": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
        "img": "//i0.hdslb.com/bfs/mall/mall/2a/cb/2acb4d51c0acbfd9ee88bf57bcbbd5f4.png",
        "marketPrice": 107000,
        "type": 1,
        "isHidden": false
      }
    ],
    "totalItemsCount": 1,
    "price": 84420,
    "showPrice": "844.2",
    "showMarketPrice": "1070",
    "uid": "34***6",
    "paymentTime": 0,
    "isMyPublish": false,
    "uname": "超***",
    "uspaceJumpUrl": null,
    "uface": "https://i0.hdslb.com/bfs/face/member/noface.jpg"
  },
  {
    "c2cItemsId": 17061928609,
    "type": 1,
    "c2cItemsName": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
    "detailDtoList": [
      {
        "blindBoxId": 166534908,
        "itemsId": 10194560,
        "skuId": 1000446546,
        "name": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
        "img": "//i0.hdslb.com/bfs/mall/mall/2a/cb/2acb4d51c0acbfd9ee88bf57bcbbd5f4.png",
        "marketPrice": 107000,
        "type": 1,
        "isHidden": false
      }
    ],
    "totalItemsCount": 1,
    "price": 85000,
    "showPrice": "850",
    "showMarketPrice": "1070",
    "uid": "33***9",
    "paymentTime": 0,
    "isMyPublish": false,
    "uname": "神***",
    "uspaceJumpUrl": null,
    "uface": "http://i1.hdslb.com/bfs/face/af454d8f4fd30ccef9bc8ff1ad96e7dcd0833787.jpg"
  },
  {
    "c2cItemsId": 17796818404,
    "type": 1,
    "c2cItemsName": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
    "detailDtoList": [
      {
        "blindBoxId": 167010489,
        "itemsId": 10194560,
        "skuId": 1000446546,
        "name": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
        "img": "//i0.hdslb.com/bfs/mall/mall/2a/cb/2acb4d51c0acbfd9ee88bf57bcbbd5f4.png",
        "marketPrice": 107000,
        "type": 1,
        "isHidden": false
      }
    ],
    "totalItemsCount": 1,
    "price": 85600,
    "showPrice": "856",
    "showMarketPrice": "1070",
    "uid": "41***5",
    "paymentTime": 0,
    "isMyPublish": false,
    "uname": "狗***",
    "uspaceJumpUrl": null,
    "uface": "https://i0.hdslb.com/bfs/face/21aecc15e019841da84795d2b4e779e416126ee3.jpg"
  },
  {
    "c2cItemsId": 17816332998,
    "type": 1,
    "c2cItemsName": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
    "detailDtoList": [
      {
        "blindBoxId": 167026441,
        "itemsId": 10194560,
        "skuId": 1000446546,
        "name": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
        "img": "//i0.hdslb.com/bfs/mall/mall/2a/cb/2acb4d51c0acbfd9ee88bf57bcbbd5f4.png",
        "marketPrice": 107000,
        "type": 1,
        "isHidden": false
      }
    ],
    "totalItemsCount": 1,
    "price": 99900,
    "showPrice": "999",
    "showMarketPrice": "1070",
    "uid": "85***8",
    "paymentTime": 0,
    "isMyPublish": false,
    "uname": "动***",
    "uspaceJumpUrl": null,
    "uface": "https://i0.hdslb.com/bfs/face/d5ce361ffa6f62a17d3350777ce92654dd9b6461.jpg"
  },
  {
    "c2cItemsId": 17810466463,
    "type": 1,
    "c2cItemsName": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
    "detailDtoList": [
      {
        "blindBoxId": 166947105,
        "itemsId": 10194560,
        "skuId": 1000446546,
        "name": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
        "img": "//i0.hdslb.com/bfs/mall/mall/2a/cb/2acb4d51c0acbfd9ee88bf57bcbbd5f4.png",
        "marketPrice": 107000,
        "type": 1,
        "isHidden": false
      }
    ],
    "totalItemsCount": 1,
    "price": 100000,
    "showPrice": "1000",
    "showMarketPrice": "1070",
    "uid": "39***2",
    "paymentTime": 0,
    "isMyPublish": false,
    "uface": "https://i2.hdslb.com/bfs/face/c1db21f6c915624ebc6137b8ea9d67c85e6cf5b3.jpg",
    "uname": "某***",
    "uspaceJumpUrl": null
  },
  {
    "c2cItemsId": 17835647491,
    "type": 1,
    "c2cItemsName": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
    "detailDtoList": [
      {
        "blindBoxId": 167016276,
        "itemsId": 10194560,
        "skuId": 1000446546,
        "name": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
        "img": "//i0.hdslb.com/bfs/mall/mall/2a/cb/2acb4d51c0acbfd9ee88bf57bcbbd5f4.png",
        "marketPrice": 107000,
        "type": 1,
        "isHidden": false
      }
    ],
    "totalItemsCount": 1,
    "price": 75000,
    "showPrice": "750",
    "showMarketPrice": "1070",
    "uid": "44***0",
    "paymentTime": 0,
    "isMyPublish": false,
    "uname": "魔***",
    "uspaceJumpUrl": null,
    "uface": "https://i0.hdslb.com/bfs/face/a58ca9f8a2b2a1291e0db8a94df9068d68c5b786.jpg"
  },
  {
    "c2cItemsId": 17886097235,
    "type": 1,
    "c2cItemsName": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
    "detailDtoList": [
      {
        "blindBoxId": 166880858,
        "itemsId": 10194560,
        "skuId": 1000446546,
        "name": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
        "img": "//i0.hdslb.com/bfs/mall/mall/2a/cb/2acb4d51c0acbfd9ee88bf57bcbbd5f4.png",
        "marketPrice": 107000,
        "type": 1,
        "isHidden": false
      }
    ],
    "totalItemsCount": 1,
    "price": 83790,
    "showPrice": "837.9",
    "showMarketPrice": "1070",
    "uid": "27***3",
    "paymentTime": 0,
    "isMyPublish": false,
    "uname": "b***",
    "uspaceJumpUrl": null,
    "uface": "https://i0.hdslb.com/bfs/face/b7f42aa69d5de551974a12ea3ec5d3623f88f27e.jpg"
  },
  {
    "c2cItemsId": 17869576478,
    "type": 1,
    "c2cItemsName": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
    "detailDtoList": [
      {
        "blindBoxId": 166790739,
        "itemsId": 10194560,
        "skuId": 1000446546,
        "name": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
        "img": "//i0.hdslb.com/bfs/mall/mall/2a/cb/2acb4d51c0acbfd9ee88bf57bcbbd5f4.png",
        "marketPrice": 107000,
        "type": 1,
        "isHidden": false
      }
    ],
    "totalItemsCount": 1,
    "price": 83800,
    "showPrice": "838",
    "showMarketPrice": "1070",
    "uid": "27***9",
    "paymentTime": 0,
    "isMyPublish": false,
    "uname": "这***",
    "uspaceJumpUrl": null,
    "uface": "http://i0.hdslb.com/bfs/face/83a711a9254f767abe0936009aec63344e911bbe.jpg"
  },
  {
    "c2cItemsId": 17779775492,
    "type": 1,
    "c2cItemsName": "boy",
    "detailDtoList": [
      {
        "blindBoxId": 166990687,
        "itemsId": 10194560,
        "skuId": 1000446546,
        "name": "寿屋 赛马娘 Pretty Derby 里见光钻 [超越那个背影] 手办",
        "img": "//i0.hdslb.com/bfs/mall/mall/2a/cb/2acb4d51c0acbfd9ee88bf57bcbbd5f4.png",
        "marketPrice": 107000,
        "type": 1,
        "isHidden": false
      }
    ],
    "totalItemsCount": 1,
    "price": 83800,
    "showPrice": "838",
    "showMarketPrice": "1070",
    "uid": "34***2",
    "paymentTime": 0,
    "isMyPublish": false,
    "uname": "本***",
    "uspaceJumpUrl": null,
    "uface": "https://i1.hdslb.com/bfs/face/d809e8130b2ed2b17264a3aa4b4881e110ee6d85.jpg"
  }
]
it("it should be ok", async () => {
  let output = await filteByName(["baby", "boy"], input)
  expect(output[0].c2cItemsName).toBe("baby")
  expect(output[1].c2cItemsName).toBe("boy")

})


// describe("scPush", () => {
//   it("it should be ok", async () => {
//     let key = "SCT47100TUHINkbC8WSlb1ouu1aeKzVHj"
//     const returnData = await sc_send("test", "testContent", key)
//     expect(returnData).toMatchInlineSnapshot('"{\\"code\\":0,\\"message\\":\\"\\",\\"data\\":{\\"pushid\\":\\"146615311\\",\\"readkey\\":\\"SCTKZMqhfvcqSk1\\",\\"error\\":\\"SUCCESS\\",\\"errno\\":0}}"')
//   })
// })


export { };