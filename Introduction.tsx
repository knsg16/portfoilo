import React from "react";
import { travel, soccer, surfing, camping } from 'outdoor-hobbies'
import { programing, leatherCraft, readingBook } from 'indoor-hobbies'

const YuukiKanasugi = ({props: IProps}) => {
  const {age} = props;
  const _onLive = async () => {
    while(age <= 100){
      try {
        await trySomethingNew;
        await StudyHard;
        await PlayHard;
        return true;
      }catch(e) {
        e === 'critical' ? console.warn('Think about it for next challenge')
          : console.log('No problems');
        return false;
      }
    }
  };
  const others: object = {
    hobby: [
      travel, soccer, surfing, camping, programing, leatherCraft, readingBook
    ],
    eductation: {
      University: 'Nagoya University Education dept',
      ExchangeStudent: 'Uppsala University  in Sweden'
    },
    experience: {
      Worksapplications: 'Quality Engineer',
      Okan: [
        'Product Manager', 'TechLead', 'ServerSide Enginer', 'Mobile Engineer', 'Infra Engineer'
      ],
      FreeLance: [
        'Carstay', 'Rails Teacher', 'Created Booking System for Futsal'
      ]
    }
  };
  return (
    <Human sex={Sex.male} birthday='1993-01-06' others={others} >
      <Do keep={_onLive()}/>
    </Human>
  );
};

export default YuukiKanasugi;
