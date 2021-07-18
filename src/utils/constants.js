import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Save all the peoples by helping them protect the current pandemic providing them all they need',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Gear up yourselves with the things you need to conquer the so called corona virus',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'We have helped 100000 plus people and would like to help more',
  },
]

export const products_url = 'https://temp-basicapi.netlify.app/api/2-basic-api'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
