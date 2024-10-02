import type {
  Matches,
  FinishedMatches,
  SeriesObjectPost,
  MlsClubs,
} from '../types'

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

export const featuredSeries: SeriesObjectPost[] = [
  {
    category: 'ESPORTES',
    title: 'Breakway',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/WEpsq2Y0XaFRxa-TTwbHuA/738x416.webp',
    description:
      'Explore histórias de bastidores que destacam as esperanças e os heróis da MLS.',
  },

  {
    category: 'ESPORTES',
    title: 'Todos os Gols!',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/H6TZ3wJ1Bd5Yi0duouU-RQ/738x416.webp',
    description: 'Todos os lances imperdíveis, golaços e voleios do campo.',
  },

  {
    category: 'ESPORTES',
    title: 'Jogadores Iconicos',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/UQOEiZ4aX5mmRTcWBsKFxw/738x416.webp',
    description:
      'Testemunhe os destaques de cair o queixo dos melhores de todos os tempos da MLS.',
  },

  {
    category: 'ESPORTES',
    title: 'Jogadores em Destaque',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/6b3Z34f2AKnujxmDewCxAw/738x416.webp',
    description: 'Saiba quem são os destaque da MLS hoje.',
  },

  {
    category: 'ESPORTES',
    title: 'Clássicos da MLS',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/VpDCoB_-SZhY7dte4mZlxQ/738x416.webp',
    description:
      'Reviva, relembre e maravilhe-se com as maiores partidas da história da liga.',
  },

  {
    category: 'ESPORTES',
    title: 'Momentos dos Playoffs',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/XpzevUYI2GvpQs6dZigWVg/738x416.webp',
    description:
      'Conheça os heróis lendários que fazem da pós-temporada da MLS uma viagem emocionante.',
  },

  {
    category: 'ESPORTES',
    title: 'Gols',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/BNvttKTGpQqC-RnUKXlRXQ/738x416.webp',
    description:
      'Explore histórias de bastidores que destacam as esperanças e os heróis da MLS.',
  },

  {
    category: 'ESPORTES',
    title: 'Gols',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/88VA8xYSLSQZmrRgALhHOA/738x416.webp',
    description:
      'Explore histórias de bastidores que destacam as esperanças e os heróis da MLS.',
  },

  {
    category: 'ESPORTES',
    title: 'Gols',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Bm4bulFRUFNE_Kmgr9sHGQ/738x416.webp',
    description:
      'Explore histórias de bastidores que destacam as esperanças e os heróis da MLS.',
  },
]

export const allClubs: MlsClubs[] = [
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FAtlanta.webp?alt=media&token=65afc0f8-24d5-472e-b287-b90bb367ab70',
    name: 'Atlanta',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FAustin.webp?alt=media&token=92df8d96-aefb-43fc-b238-0858f3b92745',
    name: 'Austin',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FCharlote.webp?alt=media&token=a24b5efd-e1dd-4b24-ad93-f7d014131ad5',
    name: 'Charlotte',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FChicago.webp?alt=media&token=deceddd2-57ed-4f48-8179-1274fc26f32c',
    name: 'Chicago',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FCincinnatti.webp?alt=media&token=012096c4-2a44-421c-8777-a1c2f8eded3d',
    name: 'Cincinnati',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FColorado.webp?alt=media&token=13a3940c-5dae-448b-b059-86d4f3619c3a',
    name: 'Colorado',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FColumbus.webp?alt=media&token=cbf7c90e-e658-4dd5-8e1f-95408b0bfe22',
    name: 'Columbus',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FD.C..webp?alt=media&token=5276253d-669b-48a6-930e-a7d5072d891f',
    name: 'D.C.',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FDalla.webp?alt=media&token=4c364997-959a-46d3-9b1b-c49a87e483a8',
    name: 'Dallas',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FHouston.webp?alt=media&token=4b3d86db-3084-46af-9a5f-cbd170d9f573',
    name: 'Houston',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FKansas.webp?alt=media&token=b5d56e59-9e54-493a-a6de-e3d98777ed80',
    name: 'Kansas',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FLAFC.webp?alt=media&token=c7d7a931-77e0-433c-a250-8827e90a6e03',
    name: 'LAFC',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FMIAMI.webp?alt=media&token=889e85a1-d32a-4e44-8bf8-9516187508fe',
    name: 'Miami',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FMinesotta.webp?alt=media&token=e1c2882e-8b38-4ab6-b845-5a4beb393734',
    name: 'Minessota',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FMontr%C3%A9al.webp?alt=media&token=fb4f1e41-d8fc-4a95-9d8a-819f288bc3c4',
    name: 'Montréal',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FMinesotta.webp?alt=media&token=e1c2882e-8b38-4ab6-b845-5a4beb393734',
    name: 'Minessota',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FMontr%C3%A9al.webp?alt=media&token=fb4f1e41-d8fc-4a95-9d8a-819f288bc3c4',
    name: 'Montréal',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FNashville.webp?alt=media&token=6f3e2837-d1c6-4508-8fb8-c12d14f8ec33',
    name: 'Nashville',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FNew%20England.webp?alt=media&token=878428a4-9a6c-4e1b-9122-f8677a45b3b6',
    name: 'New England',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FNew%20York%20City.webp?alt=media&token=96d36cb1-b14a-4fde-aebc-cc0a7ccc0b36',
    name: 'New York City',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FMontr%C3%A9al.webp?alt=media&token=fb4f1e41-d8fc-4a95-9d8a-819f288bc3c4',
    name: 'Montréal',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FNew%20York.webp?alt=media&token=1973b4e1-de9d-4511-a4fe-2c575661dab1',
    name: 'New York City Red Bull',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FOrlando.webp?alt=media&token=be11cf2d-0841-47c3-bf16-1886bc4642fd',
    name: 'Orlando',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FPhiladelphia.webp?alt=media&token=849c6eb7-901d-44f6-a0f0-b668d7075a9f',
    name: 'Philadelphia',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FPortalnd.webp?alt=media&token=ca8b12f5-d2bd-4c76-93eb-839fcc5db00f',
    name: 'Portland',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FSalt%20Lake.webp?alt=media&token=927ee324-bc96-40af-a7bd-2bb49cfe024d',
    name: 'Salt Lake City',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FSan%20Jose.webp?alt=media&token=f762d621-b1d0-4b08-a2bf-f6a23ada2b5b',
    name: 'San Jose',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FSeattle.webp?alt=media&token=2bcbdb5f-60c7-48ce-ab51-778149a6f9f0',
    name: 'Seattle',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FSt.%20Louis.webp?alt=media&token=da2ee620-67d5-4a99-842c-48d67cb39b09',
    name: 'St. Louis',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FToronto.webp?alt=media&token=1ebe8eeb-5be2-40c0-a3f4-d257371ad3b6',
    name: 'Toronto',
  },

  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/clubes%20MLS%2FVancouver.webp?alt=media&token=068a0389-e0b8-4fed-b4a7-5dc6f0e5a028',
    name: 'Vancouver',
  },
]

export const leagueStories: SeriesObjectPost[] = [
  {
    category: 'MOMENTOS NOTÁVEIS',
    title: 'Alonso Martinez',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/TNC6JMkynWFCbS35hUsACQ/1000x563.jpg',
    description:
      'O atacante da Costa Rica lidera a goleada do NYC sobre os rivais com dois gols.',
  },

  {
    category: 'MOMENTOS NOTÁVEIS',
    title: 'Patrick Agyemang',
    image:
      'https://firebasestorage.googleapis.com/v0/b/third-project-89e32.appspot.com/o/random%20image%2F600x338%20(3).webp?alt=media&token=1e09bb72-c4ea-4f54-8106-4ed284f916f3',
    description:
      'O jovem atacante do Crown espera sua chance e marca um gol e uma assistência como reserva.',
  },

  {
    category: 'MOMENTOS NOTÁVEIS',
    title: 'Mentalidade e Ambição',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/oUtLODxNX3tSpANUrDukww/1000x563.webp',
    description:
      'Acreditar no poder de mentalidades positivas impulsionou o sucesso da RSL.',
  },

  {
    category: 'BONUS',
    title: 'A reta final',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/MCHxGlt9gSi1VcXr93v_Ow/1478x832.webp',
    description:
      'Taylor analisa as disputas pela vaga do Oeste, os Wild Cards do Leste, o MVP e muito mais.',
  },

  {
    category: 'SPORTS',
    title: 'Pela Cidade: Noche Latina',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/d1/53/e7/d153e74f-be5c-7f92-2b8c-87fd575247a9/0566cda9-d802-47ae-ab37-87744756652d.png/738x416sr.webp',
    description:
      'A cidade de Nova York destaca o orgulhoso funcionário do clube e imigrante Ricardo Andrés.',
  },

  {
    category: 'ESPORTES',
    title: 'Carlos Vela, LAFC',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/1b/c6/4f/1bc64f6d-5d31-ad26-1abf-79f3e27e0b49/42285d9a-d4c0-424e-9de8-e7300645f27e.lsr/738x416sr.webp',
    description:
      'A primeira contratação do LAFC retorna para casa com os olhos postos em outra MLS Cup.',
  },

  {
    category: 'MOMENTOS NOTÁVEIS',
    title: 'Lionel Messi',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/0RQhsZs5nQoUA-mybGl3iA/1000x563.webp',
    description:
      'O GOAT retorna de forma espetacular com dois gols e uma assistência.',
  },

  {
    category: 'MOMENTOS NOTÁVEIS',
    title: 'Cucho',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/jSnadQaW37j5aPFDqvMaCQ/1000x563.webp',
    description:
      'O colombiano lidera o Crew sobre o LAFC, contribuindo para todos os três gols do seu clube.',
  },
]
