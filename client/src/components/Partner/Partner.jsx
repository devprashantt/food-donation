import React from 'react';
import Card from '../UI/Card';
import "./Partner.css"

const Partner = () => {
  const data =[
    {
      id:1,
      name:"NGO-1",
      description:"wvhevhiuerv hvi ervue ivue vuebv ebvebv uebvub ebvv ebvu evbevbei"
    },
    {
      id:2,
      name:"NGO-2",
      description:"wvhevhiuerv hvi ervue ivue vuebv ebvebv uebvub ebvv ebvu evbevbei"
    },
    {
      id:3,
      name:"NGO-3",
      description:"wvhevhiuerv hvi ervue ivue vuebv ebvebv uebvub ebvv ebvu evbevbei"
    }
  ];
  return (
    <div className='partner-page'>
      <div className="title">
        <h1>Our Partnered NGO's</h1>
      </div>
        <div className="partner">
        {
          data.map((partner)=> {
            return <Card name={partner.name} des={partner.description} />
          })
        }
        </div>
    </div>
  )
}

export default Partner