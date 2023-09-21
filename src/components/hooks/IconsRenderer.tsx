import { useLayoutEffect } from 'react'

export default function IconsRenderer () {
  return useLayoutEffect(() => {
    if (document.querySelector('#filterSpan')) {
      return
    }
    const svg = document.createElement('span')
    svg.id = 'filterSpan'
    svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M1.50008 3.45C1.50008 3.02996 1.50008 2.81994 1.58182 2.65951C1.65373 2.51839 1.76846 2.40365 1.90958 2.33175C2.07002 2.25 2.28004 2.25 2.70008 2.25H15.3001C15.7201 2.25 15.9301 2.25 16.0906 2.33175C16.2317 2.40365 16.3464 2.51839 16.4183 2.65951C16.5001 2.81994 16.5001 3.02996 16.5001 3.45V3.95205C16.5001 4.15364 16.5001 4.25444 16.4754 4.34817C16.4536 4.43123 16.4177 4.50993 16.3692 4.58082C16.3145 4.66082 16.2383 4.72684 16.086 4.85887L11.2892 9.01613C11.1368 9.14816 11.0606 9.21418 11.0059 9.29418C10.9575 9.36507 10.9215 9.44377 10.8997 9.52683C10.8751 9.62056 10.8751 9.72136 10.8751 9.92295V13.8438C10.8751 13.9905 10.8751 14.0638 10.8514 14.1272C10.8305 14.1832 10.7965 14.2334 10.7523 14.2736C10.7022 14.3192 10.6341 14.3464 10.4979 14.4009L7.94791 15.4209C7.67225 15.5311 7.53442 15.5863 7.42378 15.5633C7.32702 15.5432 7.24212 15.4857 7.18751 15.4033C7.12508 15.3091 7.12508 15.1607 7.12508 14.8638V9.92295C7.12508 9.72136 7.12508 9.62056 7.10044 9.52683C7.07861 9.44377 7.04268 9.36507 6.99421 9.29418C6.93951 9.21418 6.86334 9.14816 6.71099 9.01613L1.91416 4.85887C1.76181 4.72684 1.68564 4.66082 1.63094 4.58082C1.58247 4.50993 1.54654 4.43123 1.52471 4.34817C1.50008 4.25444 1.50008 4.15364 1.50008 3.95205V3.45Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`

    document.querySelector('.filterByID > .ant-select-selector')?.prepend(svg)
    document
      .querySelector('.filterByID > .ant-select-selector')
      ?.classList.add('flex', 'items-center', 'gap-[6px]')

    const dateLogoContainer = document.createElement('div')
    dateLogoContainer.className = 'pr-1'
    dateLogoContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M17.5 8.33335H2.5M13.3333 1.66669V5.00002M6.66667 1.66669V5.00002M6.5 18.3334H13.5C14.9001 18.3334 15.6002 18.3334 16.135 18.0609C16.6054 17.8212 16.9878 17.4387 17.2275 16.9683C17.5 16.4335 17.5 15.7335 17.5 14.3334V7.33335C17.5 5.93322 17.5 5.23316 17.2275 4.69838C16.9878 4.22797 16.6054 3.84552 16.135 3.60584C15.6002 3.33335 14.9001 3.33335 13.5 3.33335H6.5C5.09987 3.33335 4.3998 3.33335 3.86502 3.60584C3.39462 3.84552 3.01217 4.22797 2.77248 4.69838C2.5 5.23316 2.5 5.93322 2.5 7.33335V14.3334C2.5 15.7335 2.5 16.4335 2.77248 16.9683C3.01217 17.4387 3.39462 17.8212 3.86502 18.0609C4.3998 18.3334 5.09987 18.3334 6.5 18.3334Z" stroke="#667085" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
    document
      .querySelector('.dateContainer > .ant-picker-input')
      ?.prepend(dateLogoContainer)

    document.querySelector('.filterByID > .ant-select-selector')?.prepend(svg)
    document
      .querySelector('.filterByID > .ant-select-selector')
      ?.classList.add('flex', 'items-center', 'gap-[6px]')

    const statusDropdownContainer = document.createElement('div')
    statusDropdownContainer.className = 'pr-1'
    statusDropdownContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M16.6667 5L7.5 14.1667L3.33334 10" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
    document
      .querySelector('.statusContainer > .ant-select-selector')
      ?.prepend(statusDropdownContainer)
    document
      .querySelector('.statusContainer > .ant-select-selector')
      ?.classList.add('flex', 'items-center')
  }, [])
}
