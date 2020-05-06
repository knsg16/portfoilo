import Human, { IHuman } from 'human'
import { travel, soccer, surfing, camping } from 'outdoor-hobbies'
import { programing, leatherCraft, readingBook } from 'indoor-hobbies'

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
export const KanasugiYuuki: IHuman = () => {
  let me: IHuman = new Human(Sex.male, '1993-01-06', others);
  me.personality = 'Optimistic';
  await live();
  return me;
};

const live = async () => {
  while(KanasugiYuuki.age <= 100){
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


