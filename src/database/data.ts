import type { Matches, FinishedMatches } from '../types'

export const liveMatches: Matches[] = [
  {
    hour: '8:30 PM',
    teams: 'LA vs. LAFC',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/GoHd5-VNBpCD2wxXVsMZIA/738x416sr.webp',
    league: 'MLS',
  },

  {
    hour: '8:30 PM',
    teams: 'Nashville vs. Cincinnati',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/kFTMQcqVcqyJnRX3tV7cAA/670x377sr.webp',
    league: 'MLS',
  },

  {
    hour: '9:30 PM',
    teams: 'Chicago vs. New York',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/l3JUOzGiHPcdSqj3nmHzwA/738x416sr.webp',
    league: 'MLS',
  },

  {
    hour: '7:45 PM',
    teams: 'New York City vs Kansas City',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Sdrglk2MMJ9ePcpzmVNLVw/670x377sr.webp',
    league: 'MLS',
  },

  {
    hour: '7:45 PM',
    teams: 'San Jose vs. St. Louis',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/acRQ15i52tjFlbJUdOqi0g/670x377Sports.MLSPrB1.webp?imgLogoRight=LXdtAgsFTppgIi7bdUChUw&colorRight=%23e80a4d&colorLeft=%230051BA',
    league: 'MLS',
  },

  {
    hour: '8:30 PM',
    teams: 'Philadelphia vs. D.C.',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/iXIxevYDAkD1eA4nIOcs9Q/738x416Sports.MLSPrB1.webp?imgLogoRight=TF8RFnansqvKc2dQykZf1Q&colorRight=%23000000&colorLeft=%23041C2C',
    league: 'MLS',
  },

  {
    hour: '8:30 PM',
    teams: 'Portland vs. Ventura Country',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/zuXQgT_041_LHzwHL6O-uA/738x416Sports.MLSPrB1.webp?imgLogoRight=D8NdNVFw58EGGlGkAi8Isg&colorRight=%2300245D&colorLeft=%23004812',
    league: 'MLS',
  },

  {
    hour: '9:30 PM',
    teams: 'Vancouver vs Dallas',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/whZT0iHRnHcmqhBFXwK0MQ/670x377Sports.MLSPrB1.webp?imgLogoRight=t2NgSO_ylKAUWwdA0oo5CQ&colorRight=%23C6093B&colorLeft=%23202C4C',
    league: 'MLS',
  },
]

export const freeMatches: (Matches | FinishedMatches)[] = [
  {
    hour: 'TER 8:30 PM',
    teams: 'Vancouver vs Dallas',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/whZT0iHRnHcmqhBFXwK0MQ/738x416Sports.MLSPrB1.webp?imgLogoRight=acRQ15i52tjFlbJUdOqi0g&colorRight=%230051BA&colorLeft=%23202C4C',
    league: 'MLS',
  },

  {
    hour: 'QUA 8:30 PM',
    teams: 'Seattle vs. Kansas City',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/YqTqMawsckTZlDhyHBlGug/738x416Sports.MLSPrB1.webp?imgLogoRight=_HFMpJoh7k3NnHG5kFxiXw&colorRight=%230C2340&colorLeft=%232DC84D',
    league: 'MLS',
  },

  {
    hour: 'QUI 9:30 PM',
    teams: 'Orlando vs. Charlote',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/gNhQYLuiFBBNEtiBscKCPQ/738x416Sports.MLSPrB1.webp?imgLogoRight=EeCHZjYuAt7qU_KZvk0hRg&colorRight=%230085CF&colorLeft=%2361259E',
    league: 'MLS',
  },

  {
    hour: 'SEX 11:30 PM',
    teams: 'Austin vs. Kansas City',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/_ZyzA8B2yD60i6SKusp1zA/738x416sr.webp',
    league: 'U.S. Open Cup',
  },

  {
    id: 0,
    hour: '13/09/2024',
    teams: 'St. Louis vs. LA',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/uCgJpEnMIcFladQT-pvKVw/738x416sr.webp',
    league: 'MLS - 01 de Set. 2024',
    goals: {
      team1: 2,
      team2: 1,
    },
    finished: true,
  },

  {
    id: 1,
    hour: '13/09/2024',
    teams: 'Toronto vs. D.C.',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/vJ62y-sW8wdYfO-LETxWeA/738x416sr.webp',
    league: 'MLS - 03 de Set. 2024',
    goals: {
      team1: 1,
      team2: 3,
    },
    finished: true,
  },

  {
    id: 2,
    hour: '13/09/2024',
    teams: 'Kansas City vs. Indy Eleven',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/YvHpZ_QEdCGi1rYTCq2oEQ/738x416sr.webp',
    league: 'U.S Open Cup - Ago. 27, 2024',
    goals: {
      team1: 2,
      team2: 0,
    },
    finished: true,
  },

  {
    id: 3,
    hour: '13/09/2024',
    teams: 'Philadelphis vs. Columbus',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/cMRIIES4PDWOoKPtg4cL_Q/738x416sr.webp',
    league: 'MLS - 02 de Set. 2024',
    goals: {
      team1: 0,
      team2: 1,
    },
    finished: true,
  },

  {
    id: 4,
    hour: '9:30 PM',
    teams: 'Seattle vs. LAFC',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/VYVbNVMG40M7XarCXeH0FA/738x416sr.webp',
    league: 'MLS - 29 de Ago. 2024',
    goals: {
      team1: 0,
      team2: 1,
    },
    finished: true,
  },

  {
    id: 5,
    hour: '9:30 PM',
    teams: 'Minesotta vs. Seattle',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/pov-vUKqrxIX6_1sftAtMQ/738x416sr.webp',
    league: 'MLS - 27 de Ago. 2024',
    goals: {
      team1: 3,
      team2: 2,
    },
    finished: true,
  },

  {
    id: 6,
    hour: '9:30 PM',
    teams: 'Montréal vs. New England',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Fs4FoaAsnNRLpi1Ekxpyhw/738x416sr.webp',
    league: 'MLS - 27 de Ago. 2024',
    goals: {
      team1: 0,
      team2: 5,
    },
    finished: true,
  },

  {
    id: 7,
    hour: '7:30 PM',
    teams: 'Charlotte vs. New York',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/X0TOtwclcfnar003U_CJWg/738x416sr.webp',
    league: 'MLS - 27 de Ago. 2024',
    goals: {
      team1: 1,
      team2: 1,
    },
    finished: true,
  },

  {
    id: 8,
    hour: '7:30 PM',
    teams: 'D.C. vs. Dallas',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/4bW_R_aZ6wL9oC2_TnwrXw/738x416sr.webp',
    league: 'MLS - 27 de Ago. 2024',
    goals: {
      team1: 3,
      team2: 4,
    },
    finished: true,
  },

  // {
  //   id: 9,
  //   hour: '8:30 PM',
  //   teams: 'D.C vs Dallas',
  //   image:
  //     'https://is1-ssl.mzstatic.com/image/thumb/4bW_R_aZ6wL9oC2_TnwrXw/738x416sr.webp',
  //   league: 'MLS',
  // goals: {
  //   team1: 3,
  //   team2: 4,
  // },
  // finished: true,
  // },

  {
    hour: '9:30 PM',
    teams: 'Portland vs. St. Louis',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/IOPm0GbRmSCITd7AGCs6lg/738x416sr.webp',
    league: 'MLS - 27 de Ago. 2024',
    goals: {
      team1: 4,
      team2: 4,
    },
    finished: true,
  },

  {
    hour: '8:30 PM',
    teams: 'America vs. Atlas FC',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/AKkJMJQ9M2Fxbcs_Qh08fA/738x416sr.webp',
    league: 'MLS',
    goals: {
      team1: 2,
      team2: 1,
    },
    finished: true,
  },

  {
    hour: '9:30 PM',
    teams: 'New England vs. Nashville',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/qnhmiz6x3hjMJf3lmbkUZA/738x416sr.webp',
    league: 'MLS',
    goals: {
      team1: 1,
      team2: 1,
    },
    finished: true,
  },

  {
    hour: '8:30 PM',
    teams: 'Atlanta vs. D.C',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/8q7z4WO6O8HZFNoU7iiTeQ/738x416sr.webp',
    league: 'MLS',
    goals: {
      team1: 3,
      team2: 3,
    },
    finished: true,
  },

  {
    hour: '9:30 PM',
    teams: 'Vancouver vs. Tijuana',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/hUy4q-1YEYakjvLpWYX2Uw/738x416sr.webp',
    league: 'Leagues Cup - Aug 3, 2024',
    goals: {
      team1: 3,
      team2: 1,
    },
    finished: true,
  },
  {
    hour: '9:30 PM',
    teams: 'Mls All-Star Skill Challenge',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/WWyYyG7n9EM4N21CGF-6xg/738x416.webp',
    league: 'Leagues Cup - Aug 3, 2024',
  },
]

export const acessTeams: Matches[] = [
  {
    hour: '11:30 PM',
    teams: 'Portland vs. Ventura Country',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/zuXQgT_041_LHzwHL6O-uA/738x416Sports.MLSPrB1.webp?imgLogoRight=D8NdNVFw58EGGlGkAi8Isg&colorRight=%2300245D&colorLeft=%23004812',
    league: 'MLS Next Pro',
  },

  {
    hour: '11:30 PM',
    teams: 'New England vs. Chattanooga',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/ZQC7Q3m6Aa-GFnYkZxhQWw/738x416Sports.MLSPrB1.webp?imgLogoRight=4OpdipFm6i5F40GcSpvI5Q&colorRight=%23002855&colorLeft=%23CE0E2D',
    league: 'MLS Next Pro',
  },

  {
    hour: 'QUI 04:00 PM',
    teams: 'Columbus vs. Carolina',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/-h0vHPe8AmF2yD6WJ4Mcbw/738x416Sports.MLSPrB1.webp?imgLogoRight=Wimr1PpkBYIrZtWPq8O7qA&colorRight=%23215245&colorLeft=%23000000',
    league: 'MLS Next Pro',
  },

  {
    hour: 'SEX 7:00 PM',
    teams: 'The Town FC vs. St. Louis',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/QJvMJYqVbnPc_tOQaBLGCQ/738x416Sports.MLSPrB1.webp?imgLogoRight=DV6sjbP7DNn6xbWsVUBCkg&colorRight=%23E80A4D&colorLeft=%23000000',
    league: 'MLS Next Pro',
  },

  {
    hour: 'SAB 7:00 PM',
    teams: 'Huntsville vs. Cincinnati',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/m26Nsc9-8ZwAWK-e8pSNbA/738x416Sports.MLSPrB1.webp?imgLogoRight=DtSrEb0b9fCjo9IfPyY5rg&colorRight=%23FE5000&colorLeft=%230F1145',
    league: 'MLS Next Pro',
  },

  {
    hour: 'SEX 7:30 PM',
    teams: 'Philadelphia vs. NYC',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/9xSe0DCowJKZHwjqEXpKlw/738x416Sports.MLSPrB1.webp?imgLogoRight=Wxi6awVC4YPgZqgZ1GqiUg&colorRight=%239FD2FF&colorLeft=%23498BC9',
    league: 'MLS Next Pro',
  },

  {
    hour: 'QUA 8:30 PM',
    teams: 'Austin vs. Vancouver',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/5hi6Rw_UUEbtl1JZ7fkYbg/738x416Sports.MLSPrB1.webp?imgLogoRight=3H_nhKlDmJ3o58sDHSY_hQ&colorRight=%23202C4C&colorLeft=%23000000',
    league: 'MLS Next Pro',
  },

  {
    hour: 'QUI 9:30 PM',
    teams: 'Philadelphia vs. Atlanta',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/9xSe0DCowJKZHwjqEXpKlw/738x416Sports.MLSPrB1.webp?imgLogoRight=8f8LcKoHKmZPHuXKwMUVTQ&colorRight=%23000000&colorLeft=%23498BC9',
    league: 'MLS Next Pro',
  },

  {
    hour: 'QUA 8:30 PM',
    teams: 'Miami vs. Charlotte',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/T4qNgBdNHjWMZaOLqeaPyA/738x416Sports.MLSPrB1.webp?imgLogoRight=nt2lvf-iWdoGvXq5CloJrA&colorRight=%230085CF&colorLeft=%23F5B6CD',
    league: 'MLS Next Pro',
  },

  {
    hour: 'DOM 7:30 PM',
    teams: 'St. Louis vs. Tacoma',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/DV6sjbP7DNn6xbWsVUBCkg/738x416Sports.MLSPrB1.webp?imgLogoRight=KoxQJh1oznglr7JgxjD8CA&colorRight=%2364A70B&colorLeft=%23E80A4D',
    league: 'MLS Next Pro',
  },
]
