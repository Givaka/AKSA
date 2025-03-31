export function getData() {
  return [
    {
      id: "1",
      type: "work",
      start_date: new Date("2023-03-23T08:00:00"),
      end_date: new Date("2023-03-23T10:25:00"),
      text: "French Open",
      details: "Philippe-Chatrier Court\n Paris, FRA",
      color: {
            background: "#BD69BC",
            border: "#AD44AB",
            textColor: "#FFFFFF"
      },
    },
    {
      id: "2",
      type: "work",
      start_date: new Date("2023-03-08T00:00:00"),
      end_date: new Date("2023-03-13T00:00:00"),
      text: "French Open",
      details: "Philippe-Chatrier Court\n Paris, FRA",
    },
    {
      id: "3",
      type: "work",
      start_date: new Date("2023-03-09T00:00:00"),
      end_date: new Date("2023-03-14T00:00:00"),
      text: "Aegon Championship",
      details: "The Queens Club\n London, ENG",
    },
    {
      id: "4",
      type: "work",
      start_date: new Date("2023-02-21T00:00:00"),
      end_date: new Date("2023-03-16T00:00:00"),
      text: "Wimbledon",
      details: "Wimbledon\n June 21, 2009 - July 5, 2009",
    },
    {
      id: "5",
      type: "work",
      start_date: new Date("2023-02-18T00:00:00"),
      end_date: new Date("2023-02-27T00:00:00"),
      text: "Indianapolis Tennis Championship",
      details: "Indianapolis Tennis Center\n Indianapolis, IN",
    },
    {
      id: "6",
      type: "rest",
      start_date: new Date("2023-02-27T00:00:00"),
      end_date: new Date("2023-03-18T00:00:00"),
      text: "Countrywide Classic Tennis",
      details: "Los Angeles Tennis Center.\n Los Angeles, CA",
    },
    {
      id: "7",
      type: "rest",
      start_date: new Date("2023-03-10T00:00:00"),
      end_date: new Date("2023-03-18T00:00:00"),
      text: "ATP Master Tennis",
      details: "La Caja Magica.\n Madrid, Spain",
    },
    {
      id: "8",
      type: "rest",
      start_date: new Date("2023-03-01T00:00:00"),
      end_date: new Date("2023-03-11T00:00:00"),
      text: "Legg Mason Tennis Classic",
      details: "Fitzgerald Tennis Center\n Washington D.C.",
    },
    {
      id: "10",
      type: "work",
      start_date: new Date("2023-03-15T00:00:00"),
      end_date: new Date("2023-03-24T00:00:00"),
      text: "Rogers Cup Women's Tennis",
      details: "Rexall Centre\n Toronto, ON",
    },
    {
      id: "11",
      type: "work",
      start_date: new Date("2023-03-29T00:00:00"),
      end_date: new Date("2023-05-14T00:00:00"),
      text: "US Open Tennis Championship",
      details: "Arthur Ashe Stadium\n Flushing, NY",
    },
    {
      id: "12",
      type: "movie",
      start_date: new Date("2023-02-22T00:00:00"),
      end_date: new Date("2023-03-28T00:00:00"),
      text: "Barclays ATP World Tour Finals",
      details: "O2 Dome\n London, ENG",
    },
    {
      id: "14",
      type: "rest",
      start_date: new Date("2023-03-03T15:00:00"),
      end_date: new Date("2023-03-16T18:00:00"),
      text: "Parc Izvor",
      details: "BuchaRest, Romania",
    },
    {
      id: "15",
      type: "movie",
      start_date: new Date("2023-03-01T05:00:00"),
      end_date: new Date("2023-03-21T09:00:00"),
      text: "Arena Zagreb",
      details: "Zagreb, Croatia",
    },
    {
      id: "16",
      type: "movie",
      start_date: new Date("2023-03-23T09:30:00"),
      end_date: new Date("2023-03-23T12:00:00"),
      text: "Gwardia Stadium",
      details: "Warsaw, Poland",
      color: {
        background: "#00C9C5",
        border: "#1C9997",
        textColor: "#2C2F3C"
      }
    },
    {
      id: "17",
      type: "holidays",
      start_date: new Date("2023-03-083T13:00:00"),
      end_date: new Date("2023-03-23T18:00:00"),
      text: "Skonto Stadium - Riga",
      details: "Riga, Latvia",
    },
    {
      id: "18",
      type: "rest",
      start_date: new Date("2023-03-27T15:00:00"),
      end_date: new Date("2023-03-27T18:00:00"),
      text: "Zalgirio Stadionas",
      details: "Vilnius, Lithuania",
    },
    {
      id: "19",
      type: "rest",
      start_date: new Date("2023-03-30T17:00:00"),
      end_date: new Date("2023-03-30T20:00:00"),
      text: "O2 Dome",
      details: "London, ENG",
    },
    {
      id: "20",
      type: "work",
      start_date: new Date("2023-03-31T16:00:00"),
      end_date: new Date("2023-03-31T19:00:00"),
      text: "Evenemententerrein Megaland",
      details: "Landgraaf, NL",
    },
    {
      id: "21",
      type: "work",
      start_date: new Date("2023-02-02T10:00:00"),
      end_date: new Date("2023-02-02T13:00:00"),
      text: "HSH Nordbank Arena (formerly AOL Arena)",
      details: "Hamburg, GER",
    },
    {
      id: "22",
      type: "movie",
      start_date: new Date("2023-02-04T11:00:00"),
      end_date: new Date("2023-02-04T14:00:00"),
      text: "LTU Arena",
      details: "Dusseldorf, GER",
    },
    {
      id: "23",
      type: "movie",
      start_date: new Date("2023-02-05T12:00:00"),
      end_date: new Date("2023-02-05T15:00:00"),
      text: "LTU Arena",
      details: "Dusseldorf, GER",
    },
    {
      id: "24",
      type: "movie",
      start_date: new Date("2023-02-07T18:30:00"),
      end_date: new Date("2023-02-07T20:30:00"),
      text: "Zentralstadion - Leipzig",
      details: "Leipzig, GER ",
    },
    {
      id: "25",
      type: "movie",
      start_date: new Date("2023-02-06T19:30:00"),
      end_date: new Date("2023-02-06T23:30:00"),
      text: "Zentralstadion - Leipzig",
      details: "Leipzig, GER",
    },
    {
      id: "26",
      type: "movie",
      start_date: new Date("2023-02-05T19:40:00"),
      end_date: new Date("2023-02-05T23:30:00"),
      text: "Zentralstadion - Leipzig",
      details: "Leipzig, GER",
    },
    {
      id: "27",
      type: "meeting",
      start_date: new Date("2023-02-12T19:50:00"),
      end_date: new Date("2023-02-12T23:30:00"),
      text: "Zentralstadion - Leipzig",
      details: "Leipzig, GER",
    },
    {
      id: "28",
      type: "meeting",
      start_date: new Date("2023-02-07T19:55:00"),
      end_date: new Date("2023-02-07T23:30:00"),
      text: "Zentralstadion - Leipzig",
      details: "Leipzig, GER",
    },
    {
      id: "29",
      type: "meeting",
      start_date: new Date("2023-02-10 8:30:00"),
      end_date: new Date("2023-02-10T10:30:00"),
      text: "Zentralstadion - Leipzig",
      details: "Leipzig, GER",
      readonly: true,
      dragMove: false,
      dragResize: false,
    },
    {
      id: "30",
      type: "meeting",
      start_date: new Date("2023-02-07T20:00:00"),
      end_date: new Date("2023-02-07T23:00:00"),
      text: "Zentralstadion - Leipzig",
      details: "Leipzig, GER",
    },
    {
      id: "31",
      type: "movie",
      start_date: new Date("2023-02-08T17:00:00"),
      end_date: new Date("2023-02-08T20:00:00"),
      text: "Zentralstadion - Leipzig",
      details: "Leipzig, GER",
    },
    {
      id: "32",
      type: "work",
      start_date: new Date("2023-02-10T14:00:00"),
      end_date: new Date("2023-02-10T18:30:00"),
      text: "Olympiastadion - Berlin",
      details: "Berlin, GER",
    },
    {
      id: "33",
      type: "rest",
      start_date: new Date("2023-02-12T14:00:00"),
      end_date: new Date("2023-02-12T16:00:00"),
      text: "Commerz Bank Arena",
      details: "Frankfurt, GER",
    },
    {
      id: "34",
      type: "meeting",
      start_date: new Date("2023-02-13T11:00:00"),
      end_date: new Date("2023-02-13T16:00:00"),
      text: "Olympic Stadium - Munich",
      details: "Munich, GER",
    },
    {
      id: "35",
      type: "meeting",
      start_date: new Date("2023-02-14T19:00:00"),
      end_date: new Date("2023-02-14T22:00:00"),
      text: "Stadio Olimpico",
      details: "Rome, Italy",
    },
    {
      id: "36",
      type: "meeting",
      start_date: new Date("2023-02-14T19:10:00"),
      end_date: new Date("2023-02-14T22:00:00"),
      text: "Stadio Olimpico",
      details: "Rome, Italy",
    },
    {
      id: "37",
      type: "meeting",
      start_date: new Date("2023-02-16T19:20:00"),
      end_date: new Date("2023-02-16T22:00:00"),
      text: "Stadio Olimpico",
      details: "Rome, Italy",
    },
    {
      id: "38",
      type: "meeting",
      start_date: new Date("2023-02-15T19:30:00"),
      end_date: new Date("2023-02-15T22:00:00"),
      text: "Stadio Olimpico",
      details: "Rome, Italy",
    },
    {
      id: "39",
      type: "meeting",
      start_date: new Date("2023-03-08T17:40:00"),
      end_date: new Date("2023-03-10T22:00:00"),
      text: "Stadio Olimpico",
      details: "Rome, Italy",
    },
    {
      id: "40",
      type: "meeting",
      start_date: new Date("2023-02-16T15:00:00"),
      end_date: new Date("2023-02-16T16:00:00"),
      text: "Stadio Olimpico",
      details: "Rome, Italy",
    }
  ]
}
