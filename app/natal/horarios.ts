export type HorariosType = {
  horario: string[];
  situacao: "Disponível" | "Não disponível";
};

export const HorariosSabado: HorariosType[] = [
  {
    horario: ["9:30", "10:00"],
    situacao: "Disponível",
  },
  {
    horario: ["10:10", "10:40"],
    situacao: "Disponível",
  },
  {
    horario: ["10:50", "11:20"],
    situacao: "Disponível",
  },
  {
    horario: ["13:00", "13:30"],
    situacao: "Disponível",
  },
  {
    horario: ["13:40", "14:10"],
    situacao: "Disponível",
  },
  {
    horario: ["14:20", "14:50"],
    situacao: "Disponível",
  },
  {
    horario: ["15:00", "15:30"],
    situacao: "Disponível",
  },
  {
    horario: ["15:40", "16:10"],
    situacao: "Disponível",
  },
  {
    horario: ["16:20", "16:50"],
    situacao: "Disponível",
  },
  {
    horario: ["17:00", "17:30"],
    situacao: "Disponível",
  },
];

export const HorariosDomingo: HorariosType[] = [
  {
    horario: ["8:00", "8:30"],
    situacao: "Disponível",
  },
  {
    horario: ["8:40", "9:10"],
    situacao: "Disponível",
  },
  {
    horario: ["9:20", "9:50"],
    situacao: "Disponível",
  },
  {
    horario: ["10:00", "10:30"],
    situacao: "Disponível",
  },
  {
    horario: ["10:40", "11:10"],
    situacao: "Disponível",
  },
  {
    horario: ["11:20", "11:50"],
    situacao: "Disponível",
  },
  {
    horario: ["13:30", "14:00"],
    situacao: "Disponível",
  },
  {
    horario: ["14:10", "14:40"],
    situacao: "Disponível",
  },
  {
    horario: ["14:50", "15:20"],
    situacao: "Disponível",
  },
  {
    horario: ["15:30", "16:00"],
    situacao: "Disponível",
  },
  {
    horario: ["16:10", "16:40"],
    situacao: "Disponível",
  },
  {
    horario: ["16:50", "17:20"],
    situacao: "Disponível",
  },
];
