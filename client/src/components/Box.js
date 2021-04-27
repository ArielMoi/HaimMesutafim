import React from 'react'
import { NavLink } from 'react-router-dom'

const Box = () => {
  const data = {
    url: "https://www.ruachtova.org.il/projects/32702",
    img: "https://www.ruachtova.org.il/photos/260x210/104.jpg",
    title: {
      arb:
        "تقديم الجلسات والمحاضرات لكبار السن في النوادي النهارية في جميع أنحاء المدينة",
      heb: "העברת הפעלות והרצאות לקשישים במועדוני יום ברחבי העיר",
      eng:
        "Delivering sessions and lectures to seniors at day clubs across the city",
    },
    description: {
      arb: "text",
      heb: "text",
      eng:
        "Jerusalem Municipality - The Department of Veteran Residents operates social centers throughout the city, which provide leisure and cultural services to the entire elderly population. Clubs across the city are looking for volunteers to deliver lectures or sessions to seniors. Volunteering includes arriving at one of the clubs, and transferring activities in areas such as: public singing, dancing and art. It is also possible to coordinate arrival with refreshments in order to make the elderly happy, to carry out sports activities and everything else for the elderly, who are active and very enjoyable when volunteers arrive. In addition, you can come and deliver lectures on: health, economics, news from Israel and the world, trips and general knowledge. Volunteering takes place on Sundays-Wednesdays, from 9:00 to 12:30, for at least one hour. Can be reached on a one-time basis. Volunteering can also take place from home, through the zoom.",
    },
  }; 

  return (
    <div>
      <NavLink to={data.url}>
      <div className="box">
        <img src={data.img} alt="volunteer-img"/>
        <span>{data.title.eng}</span>
      </div>
      </NavLink>
    </div>
  )
}

export default Box;