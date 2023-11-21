export interface Option {
  id: number
  raion: string | null
}

export interface Stroit {
  ID: string
  Municipal_districts: string | null
  vsego_raip: string
  vvedenovsrok: string
  vvedenovsrok_persent: string
  obj_s_dop: string
  obj_s_dop_persent: string
  obj_s_otst: string
  obj_s_otst_persent: string
  vivedeno: string
  zakontrakt: string
  ispolneno: string
}

export interface Gosusluga {
  ID: string
  Municipal_districts: string | null
  kol_uslug: string
  kol_zayav: string
  dolya_prosroch: string
  dolya_otkaz: string
  sred_vremya: string
  fiz_lico: string
  ur_lico: string
}

export interface Service112 {
  ID: string
  Municipal_districts: string | null
  vizovi: string
  slugbi_vsegi: string
  slugbi01: string
  slugbi02: string
  slugbi03: string
  slugbi04: string
  slugbieddc: string
}

export interface Road {
  ID: string
  Municipal_districts: string | null
  protyajonnost: string
  asfaltobeton: string
  perehodnii: string
  proinspectorovano: string
  defects: string
}

export interface Obespech {
  ID: string
  Municipal_districts: string | null
  bolnici: string
  policliniki: string
  detsad: string
  school: string
  sportplosh: string
  sportzal: string
  bassein: string
}

export interface Raion {
  ID: string
  Municipal_districts: string
  Chief: string
  Chiefs_foto: string
  Administrative_center: string
  City_foto: string
  People_man: string
  S_km2: string
  Cities: string
  Village: string
  icon: string
  City_icon: string
  invest: string
  gosuslugi: string
  detsad: string
  school: string
  bezrab: string
  dorogi: string
}
