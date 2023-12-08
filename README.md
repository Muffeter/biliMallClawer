### Usage

create `.env` file

ENV:

*   KEY: The key of push (optional)
*   SEARCHITEM: a list contain ur Search Target Items (required)
*   COOKIE: cookie, separeate by "," (required)
*   SEARCHTIME:  default=20 (optional)
*   PRICE:  default=75000 the min price (optional)
    example: SEARCHITEM="里见,米浴"
*   LOCAL: for local use (optional)

Custom message push:

example in `plugins/serverPush.ts` and register in `plugins/register.ts`
recommend [ServerChan](https://sct.ftqq.com/)