
import fsAsync from 'node:fs'
let log_stream = fsAsync.createWriteStream('logs.txt', { flags: 'a' })
export const log = (info: string) => {
  log_stream.write(`${info}\n`)
}

export const sleep = async (sleepTime: number) => {
  const random = Math.random() + sleepTime;
  await new Promise(r => {
    setTimeout(r, random)
  });
  // return random
}

export const toArray = <T>(input: T | T[]) => {
  return Array.isArray(input)
    ? input
    : [input]
}

export const getCurrentTime = () => {
  return new Date(Date.now()).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })
}