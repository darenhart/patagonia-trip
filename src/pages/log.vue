<template>
  <q-page padding>
    <p class="caption">
      Acesse a <a target="_blank" href="https://docs.google.com/spreadsheets/d/1h_DqRs4x_f9nJ4AM-QcrCmykR1IXHAM8ZEvonXcv-Zw/edit?usp=sharing">Planilha</a>
    </p>
    <q-table
      :pagination.sync="pagination"
      title="Log diário"
      hide-bottom
      :data="tableData"
      :columns="columns"
      row-key="name"
    />
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data: () => ({
    pagination: {
      sortBy: null, // String, column "name" property value
      descending: true,
      page: 1,
      rowsPerPage: 1000 // current rows per page being displayed
    },
    columns: [
      {
        name: 'dia',
        required: true,
        label: 'Dia',
        align: 'left',
        field: 'dia',
        sortable: true
      },
      {
        name: 'local',
        required: true,
        label: 'Local',
        align: 'left',
        field: 'local',
        sortable: true
      },
      {
        name: 'km',
        required: true,
        label: 'KM',
        align: 'right',
        field: 'km',
        sortable: true
      },
      {
        name: 'pernoite',
        required: true,
        label: 'Pernoite',
        align: 'left',
        field: 'pernoite',
        sortable: true
      },
      {
        name: 'convertido',
        required: true,
        label: 'R$ p/ noite',
        align: 'right',
        field: 'convertido',
        sortable: true
      },
      {
        name: 'obs',
        required: true,
        label: 'Obs',
        align: 'left',
        field: 'obs',
        sortable: true
      },
      {
        name: 'bike',
        required: true,
        label: 'Bike',
        align: 'left',
        field: 'bike',
        sortable: true
      }
    ],
    tableData: [
      {
        'dia': '12/10/17',
        'local': 'estrela',
        'km': 0,
        'pernoite': 'casa'
      },
      {
        'dia': '13/10/17',
        'local': 'serio',
        'km': 40,
        'pernoite': 'camping',
        'convertido': 8
      },
      {
        'dia': '14/10/17',
        'local': 'venancio aires',
        'km': 40,
        'pernoite': 'hosp solid'
      },
      {
        'dia': '15/10/17',
        'local': 'candelaria',
        'km': 69,
        'pernoite': 'parque'
      },
      {
        'dia': '16/10/17',
        'local': 'agudo',
        'km': 50,
        'pernoite': 'camping'
      },
      {
        'dia': '17/10/17',
        'local': 'santa maria',
        'km': 64,
        'pernoite': 'hosp solid'
      },
      {
        'dia': '18/10/17',
        'local': 'pau fincado',
        'km': 59,
        'pernoite': 'hosp solid'
      },
      {
        'dia': '19/10/17',
        'local': 'rosario do sul',
        'km': 74,
        'pernoite': 'pousada',
        'convertido': 20
      },
      {
        'dia': '20/10/17',
        'local': 'snta do livramento',
        'km': 113,
        'pernoite': 'hotel',
        'convertido': 50,
        'bike': 'abracadeira do canote comeu a rosc'
      },
      {
        'dia': '21/10/17',
        'local': 'rivera',
        'km': '0',
        'pernoite': 'hosp solid',
        'bike': 'furo camara'
      },
      {
        'dia': '22/10/17',
        'local': 'rural',
        'km': 64,
        'pernoite': 'wild'
      },
      {
        'dia': '23/10/17',
        'local': 'artigas',
        'km': 56,
        'pernoite': 'camping',
        'convertido': 23,
        'obs': 'uruguai'
      },
      {
        'dia': '24/10/17',
        'local': 'rural',
        'km': 107,
        'pernoite': 'wild'
      },
      {
        'dia': '25/10/17',
        'local': 'rural',
        'km': 67,
        'pernoite': 'wild',
        'bike': 'cabo de marcha dianteiro trocado'
      },
      {
        'dia': '26/10/17',
        'local': 'salto',
        'km': 66,
        'pernoite': 'warmshower'
      },
      {
        'dia': '27/10/17',
        'local': 'salto',
        'km': '0',
        'pernoite': 'warmshower'
      },
      {
        'dia': '28/10/17',
        'local': 'general campos',
        'km': 70,
        'pernoite': 'praça',
        'obs': 'argentina, bus 130 pesos'
      },
      {
        'dia': '29/10/17',
        'local': 'bovril',
        'km': '0',
        'pernoite': 'camping',
        'obs': 'grupo de motoqueiros. carona'
      },
      {
        'dia': '30/10/17',
        'local': 'parana',
        'km': 106,
        'pernoite': 'camping'
      },
      {
        'dia': '31/10/17',
        'local': 'sao tome',
        'km': 65,
        'pernoite': 'camping',
        'convertido': '4,59'
      },
      {
        'dia': '1/11/17',
        'local': 'sa pereira',
        'km': 67,
        'pernoite': 'bombeiros',
        'bike': 'trocada corrente'
      },
      {
        'dia': '2/11/17',
        'local': 'colonia cello',
        'km': 54,
        'pernoite': 'hosp solid'
      },
      {
        'dia': '3/11/17',
        'local': 'la paquita',
        'km': 109,
        'pernoite': 'parque cabana',
        'obs': 'media 19km/h'
      },
      {
        'dia': '4/11/17',
        'local': 'miamar',
        'km': 65,
        'pernoite': 'camping',
        'convertido': '18,36',
        'obs': 'laguna, flamingos',
        'bike': 'aperto de raios da frente'
      },
      {
        'dia': '5/11/17',
        'local': 'la para',
        'km': 40,
        'pernoite': 'camping',
        'convertido': '14,69',
        'obs': 'assado com grupo de amigos'
      },
      {
        'dia': '6/11/17',
        'local': 'Cañada de Luque',
        'km': 95,
        'pernoite': 'praça',
        'convertido': '0'
      },
      {
        'dia': '7/11/17',
        'local': 'villa del totoral',
        'km': 40,
        'pernoite': 'wild',
        'convertido': '0',
        'bike': 'troquei 1 niple'
      },
      {
        'dia': '8/11/17',
        'local': 'villa del totoral',
        'km': '0',
        'pernoite': 'wild',
        'convertido': '0'
      },
      {
        'dia': '9/11/17',
        'local': 'san marcos sierras',
        'km': 85,
        'pernoite': 'camping',
        'convertido': '11,02',
        'gasto turismo': '9,181050312',
        'obs': 'cuervas del ongamira 50 pesos'
      },
      {
        'dia': '10/11/17',
        'local': 'capilla del monte',
        'km': 36,
        'pernoite': 'camping',
        'convertido': '20,2'
      },
      {
        'dia': '11/11/17',
        'local': 'cosquin',
        'km': 53,
        'pernoite': 'camping',
        'convertido': '18,36',
        'bike': 'furo pneu traz pequeno'
      },
      {
        'dia': '12/11/17',
        'local': 'tanti',
        'km': 28,
        'pernoite': 'warmshower',
        'convertido': '0',
        'gasto turismo': '27,54315094',
        'obs': 'cuerva de los pajaritos 150 pesos'
      },
      {
        'dia': '13/11/17',
        'local': 'los gigantes',
        'km': 46,
        'pernoite': 'wild',
        'convertido': '0',
        'obs': 'subida de 1000m',
        'bike': 'furo pneu traz grande bike parada, troquei camara'
      },
      {
        'dia': '14/11/17',
        'local': 'salascate',
        'km': 65,
        'pernoite': 'campo futbol',
        'convertido': '0'
      },
      {
        'dia': '15/11/17',
        'local': 'pocho',
        'km': 68,
        'pernoite': 'iglesia',
        'convertido': '0',
        'obs': 'los tuneles'
      },
      {
        'dia': '16/11/17',
        'local': 'cura brochero',
        'km': 51,
        'pernoite': 'camping',
        'convertido': '0'
      },
      {
        'dia': '17/11/17',
        'local': 'la paz',
        'km': 75,
        'pernoite': 'camping',
        'convertido': '0'
      },
      {
        'dia': '18/11/17',
        'local': 'carpinteria',
        'km': 28,
        'pernoite': 'camping',
        'convertido': '27,54',
        'bike': 'furo rasgo pneu frente grande bike parada, troquei camara'
      },
      {
        'dia': '19/11/17',
        'local': 'papagayo',
        'km': 41,
        'pernoite': 'camping',
        'convertido': '0'
      },
      {
        'dia': '20/11/17',
        'local': 'la toma',
        'km': 98,
        'pernoite': 'camping',
        'convertido': '9,18',
        'bike': 'furo pneu traz pequeno'
      },
      {
        'dia': '21/11/17',
        'local': 'potrero los funes',
        'km': 87,
        'pernoite': 'camping',
        'convertido': '0'
      },
      {
        'dia': '22/11/17',
        'local': 'san luis',
        'km': 22,
        'pernoite': 'warmshower',
        'convertido': '0'
      },
      {
        'dia': '23/11/17',
        'km': 92,
        'pernoite': 'wild bivac',
        'convertido': '0',
        'obs': 'fiz 40km sem paradas. vi um asteroide'
      },
      {
        'dia': '24/11/17',
        'local': 'monte coman',
        'km': 140,
        'pernoite': 'wild',
        'convertido': '0',
        'obs': 'vento favor. av 20',
        'bike': 'furo pneu traz espinho'
      },
      {
        'dia': '25/11/17',
        'local': 'san rafael',
        'km': 61,
        'pernoite': 'camping',
        'convertido': '18,36',
        'bike': 'furo pneu traz muita pressao no ripio'
      },
      {
        'dia': '26/11/17',
        'local': 'san rafael',
        'km': '0',
        'pernoite': 'camping',
        'convertido': '18,36',
        'bike': 'trocada corrente'
      },
      {
        'dia': '27/11/17',
        'km': 80,
        'pernoite': 'wild',
        'convertido': '0'
      },
      {
        'dia': '28/11/17',
        'local': 'sosneado',
        'km': 59,
        'pernoite': 'hosp solidaria',
        'convertido': '0'
      },
      {
        'dia': '29/11/17',
        'local': 'malargue',
        'km': 55,
        'pernoite': 'camping',
        'convertido': '9,18'
      },
      {
        'dia': '30/11/17',
        'local': 'bradas blancas',
        'km': 71,
        'pernoite': 'camping',
        'convertido': '11,02'
      },
      {
        'dia': '1/12/17',
        'km': 87,
        'pernoite': 'wild',
        'convertido': '0'
      },
      {
        'dia': '2/12/17',
        'local': 'barrancas',
        'km': 65,
        'pernoite': 'camping',
        'convertido': '18,36'
      },
      {
        'dia': '3/12/17',
        'km': 61,
        'pernoite': 'wild',
        'convertido': '0'
      },
      {
        'dia': '4/12/17',
        'local': 'chos malal',
        'km': 68,
        'pernoite': 'camping',
        'convertido': '18,36'
      },
      {
        'dia': '5/12/17',
        'local': 'chorriaca',
        'km': 80,
        'pernoite': 'policia',
        'convertido': '0'
      },
      {
        'dia': '6/12/17',
        'local': 'las lajas',
        'km': 92,
        'pernoite': 'camping',
        'convertido': '18,36'
      },
      {
        'dia': '7/12/17',
        'local': 'las lajas',
        'km': '0',
        'pernoite': 'camping',
        'convertido': '18,36'
      },
      {
        'dia': '8/12/17',
        'km': 56,
        'pernoite': 'wild',
        'convertido': '0',
        'obs': 'muito vento co tra e subida'
      },
      {
        'dia': '9/12/17',
        'km': 62,
        'pernoite': 'wild',
        'convertido': '0'
      },
      {
        'dia': '10/12/17',
        'local': 'alumine',
        'km': 85,
        'pernoite': 'wild',
        'convertido': '0'
      },
      {
        'dia': '11/12/17',
        'local': 'junin de los andes',
        'km': 84,
        'pernoite': 'wild',
        'convertido': '0'
      },
      {
        'dia': '12/12/17',
        'local': 'martin de l. andes',
        'km': 33,
        'pernoite': 'camping',
        'convertido': '36,72'
      },
      {
        'dia': '13/12/17',
        'local': 'lago villarino',
        'km': 52,
        'pernoite': 'wild',
        'convertido': '0'
      },
      {
        'dia': '14/12/17',
        'local': 'lago espejo',
        'km': 50,
        'pernoite': 'wild',
        'convertido': '0'
      },
      {
        'dia': '15/12/17',
        'local': 'lago espejo',
        'km': '0',
        'pernoite': 'wild',
        'convertido': '0'
      },
      {
        'dia': '16/12/17',
        'local': 'villa da angostura',
        'km': 52,
        'pernoite': 'camping',
        'convertido': '27,54'
      },
      {
        'dia': '17/12/17',
        'local': 'dina huapi',
        'km': 39,
        'pernoite': 'wild',
        'convertido': '0'
      },
      {
        'dia': '18/12/17',
        'local': 'bariloche',
        'km': 44,
        'pernoite': 'wild',
        'convertido': '0',
        'bike': 'pneu shwalbe trazeiro apesenta falha'
      },
      {
        'dia': '19/12/17',
        'local': 'lago gutierres',
        'km': 36,
        'pernoite': 'wild',
        'convertido': '0',
        'gasto turismo': '78,03892765',
        'obs': 'trekking 10km catedral, 425 pesos o teleferico'
      },
      {
        'dia': '20/12/17',
        'local': 'rio villegas',
        'km': 55,
        'pernoite': 'camping',
        'convertido': '9,18'
      },
      {
        'dia': '21/12/17',
        'local': 'el bolson',
        'km': 65,
        'pernoite': 'camping',
        'convertido': '18,36',
        'bike': 'trocado pneu trazeiro'
      },
      {
        'dia': '22/12/17',
        'km': 53,
        'pernoite': 'wild',
        'convertido': '0'
      },
      {
        'dia': '23/12/17',
        'local': 'cholila',
        'km': 30,
        'pernoite': 'bomberos',
        'convertido': '0'
      },
      {
        'dia': '24/12/17',
        'local': 'parque los alerces',
        'km': 27,
        'pernoite': 'camping',
        'convertido': '0',
        'gasto turismo': '45,90525156',
        'obs': 'parque nacional los alerces 250 pesos'
      },
      {
        'dia': '25/12/17',
        'local': 'parque los alerces',
        'km': 32,
        'pernoite': 'wild',
        'convertido': '0'
      },
      {
        'dia': '26/12/17',
        'local': 'trevelin',
        'km': 54,
        'pernoite': 'camping',
        'convertido': '18,36'
      },
      {
        'dia': '27/12/17',
        'local': 'futaleufu',
        'km': 59,
        'pernoite': 'wild',
        'obs': 'CHILEE'
      },
      {
        'dia': '28/12/17',
        'local': 'villa vanguardia',
        'km': 106,
        'pernoite': 'wild'
      },
      {
        'dia': '29/12/17',
        'local': 'la junta',
        'km': 45,
        'pernoite': 'camping',
        'convertido': '24,11'
      },
      {
        'dia': '30/12/17',
        'km': 69,
        'pernoite': 'wild',
        'convertido': '0'
      },
      {
        'dia': '31/12/17',
        'km': 59,
        'pernoite': 'camping',
        'convertido': '12,06'
      },
      {
        'dia': '1/1/18',
        'km': '0',
        'pernoite': 'camping',
        'convertido': '0'
      },
      {
        'dia': '2/1/18',
        'local': 'manihuales',
        'km': 85,
        'pernoite': 'wild',
        'convertido': '0'
      },
      {
        'dia': '3/1/18',
        'local': 'coyhaique',
        'km': 84,
        'pernoite': 'camping',
        'convertido': '30,14'
      },
      {
        'dia': '4/1/18',
        'km': 61,
        'pernoite': 'wild',
        'convertido': '0'
      },
      {
        'dia': '5/1/18',
        'local': 'villa cerro castillo',
        'km': 40,
        'pernoite': 'camping',
        'convertido': '24,11'
      },
      {
        'dia': '6/1/18',
        'local': 'puerto ibanes',
        'km': 42,
        'pernoite': 'camping',
        'convertido': '24,11'
      },
      {
        'dia': '7/1/18',
        'local': 'chile chico',
        'km': 6,
        'pernoite': 'camping',
        'convertido': '24,11'
      },
      {
        'dia': '8/1/18',
        'local': 'los antiguos',
        'km': 20,
        'pernoite': 'camping',
        'convertido': '23,87',
        'obs': 'Argentina'
      },
      {
        'dia': '9/1/18',
        'local': 'perito moreno',
        'km': 59,
        'pernoite': 'bus',
        'convertido': '0',
        'obs': 'bus ate Chalten 215 + 46 reais'
      },
      {
        'dia': '10/1/18',
        'local': 'el chalten',
        'km': '0',
        'pernoite': 'camping',
        'convertido': '22,03',
        'obs': 'trekking 10km vista para fitz roy'
      },
      {
        'dia': '11/1/18',
        'local': 'el chalten',
        'km': '0',
        'pernoite': 'camping',
        'convertido': '22,03',
        'obs': 'trekking 7km vista pra torre'
      },
      {
        'dia': '12/1/18',
        'km': 113,
        'pernoite': 'camping',
        'convertido': '0',
        'obs': '90km de vento forte a favor!!'
      },
      {
        'dia': '13/1/18',
        'km': 70,
        'pernoite': 'wild',
        'convertido': '0'
      },
      {
        'dia': '14/1/18',
        'local': 'calafate',
        'km': 41,
        'pernoite': 'camping',
        'convertido': '18,36',
        'obs': 'vento contra'
      },
      {
        'dia': '15/1/18',
        'local': 'los glaciares',
        'km': 51,
        'pernoite': 'wild',
        'convertido': '0',
        'bike': 'manutenção freio trazeiro'
      },
      {
        'dia': '16/1/18',
        'local': 'calafate',
        'km': 50,
        'pernoite': 'camping',
        'convertido': '18,36',
        'gasto turismo': '91,81050312',
        'obs': '500 pesos glaciar. caronas',
        'bike': 'manutençao cambio dianteiro, alinhamento roda traz'
      },
      {
        'dia': '17/1/18',
        'km': 60,
        'pernoite': 'wild',
        'convertido': '0'
      },
      {
        'dia': '18/1/18',
        'local': 'agvp',
        'km': 35,
        'pernoite': 'agvp',
        'convertido': '0'
      },
      {
        'dia': '19/1/18',
        'km': 130,
        'pernoite': 'camping',
        'convertido': '18,36',
        'obs': 'vento favor com um pouco lateral'
      },
      {
        'dia': '20/1/18',
        'local': 'rio gallegos',
        'km': 80,
        'pernoite': 'camping',
        'convertido': '20,2',
        'obs': 'FIM'
      },
      {
        'dia': '21/1/18',
        'local': 'rio gallegos',
        'km': '0',
        'pernoite': 'camping',
        'convertido': '20,2',
        'obs': 'peso 62',
        'bike': 'problemas com cambio trazeiro, rolamento do meio torto'
      },
      {
        'dia': '22/1/18',
        'local': 'rio gallegos',
        'km': '0',
        'pernoite': 'camping',
        'convertido': '20,2'
      },
      {
        'dia': '23/1/18',
        'local': 'piedrabuena',
        'km': 36,
        'pernoite': 'wild',
        'convertido': '0',
        'obs': '2 caronas uns 180km, camionete e carro'
      },
      {
        'dia': '24/1/18',
        'local': 'puerto madryn',
        'km': 25,
        'pernoite': 'camping',
        'convertido': '18,36',
        'obs': 'carona camionete 950km'
      },
      {
        'dia': '25/1/18',
        'local': 'puerto madryn',
        'km': 25,
        'pernoite': 'wild',
        'convertido': '0',
        'bike': 'um raio da fente soltou'
      },
      {
        'dia': '26/1/18',
        'local': 'puerto madryn',
        'km': 5,
        'pernoite': 'camping',
        'convertido': '18,36'
      },
      {
        'dia': '27/1/18',
        'local': 'puerto piramides',
        'km': 95,
        'pernoite': 'camping',
        'convertido': '27,54',
        'obs': 'entrada parque 415, carona 150km'
      },
      {
        'dia': '28/1/18',
        'local': 'puerto madryn',
        'km': 5,
        'pernoite': 'camping',
        'convertido': '18,36',
        'obs': 'bus 25 pila, 90km'
      },
      {
        'dia': '29/1/18',
        'local': 'sierra grande',
        'km': 65,
        'pernoite': 'posto',
        'convertido': '0',
        'obs': 'carona camionete 70km',
        'bike': 'odometro parou de funcionar'
      },
      {
        'dia': '30/1/18',
        'local': 'san antonio',
        'km': 5,
        'pernoite': 'wild',
        'convertido': '0',
        'obs': 'carona camionete 125km'
      },
      {
        'dia': '31/1/18',
        'local': 'general conesa',
        'km': 86,
        'pernoite': 'wild',
        'convertido': '0'
      },
      {
        'dia': '1/2/18',
        'local': 'bahia blanca',
        'km': 10,
        'pernoite': 'camping',
        'convertido': '18,36',
        'obs': 'carona caminhao 312km'
      },
      {
        'dia': '2/2/18',
        'local': 'zarate',
        'km': 10,
        'pernoite': 'wild',
        'convertido': '0',
        'obs': 'carona caminhao 750km',
        'bike': 'suporte de caramanhola quebrou'
      },
      {
        'dia': '3/2/18',
        'local': 'ceibas',
        'km': 88,
        'pernoite': 'posto'
      },
      {
        'dia': '4/2/18',
        'local': 'gualeguaychu',
        'km': 68,
        'pernoite': 'wild'
      },
      {
        'dia': '5/2/18',
        'km': 87,
        'pernoite': 'camping',
        'obs': 'russo louco'
      },
      {
        'dia': '6/2/18',
        'local': 'paysandu',
        'km': 45,
        'pernoite': 'warmshower',
        'obs': 'uruguai'
      },
      {
        'dia': '7/2/18',
        'km': 67,
        'pernoite': 'wild'
      },
      {
        'dia': '8/2/18',
        'km': 62,
        'pernoite': 'wild',
        'obs': 'acamp com miguel abreu',
        'bike': 'cabo cambio dianteiro'
      },
      {
        'dia': '9/2/18',
        'km': 66,
        'pernoite': 'wild',
        'bike': 'furo duplo pneu traz'
      },
      {
        'dia': '10/2/18',
        'local': 'taquarembo',
        'km': 41,
        'pernoite': 'wild',
        'obs': 'me juntei a uma malucada'
      },
      {
        'dia': '11/2/18',
        'km': 37,
        'pernoite': 'wild'
      },
      {
        'dia': '12/2/18',
        'local': 'rivera',
        'km': 74,
        'pernoite': 'hosp solid',
        'obs': 'grilo/gafanhoto som legal'
      },
      {
        'dia': '13/2/18',
        'local': 'santa cruz do sul',
        'km': 3,
        'pernoite': 'wild',
        'obs': 'bus a santa cruz 110 pila, 450km'
      },
      {
        'dia': '14/2/18',
        'local': 'estrela',
        'km': 67,
        'pernoite': 'casa!!',
        'obs': 'peso 60'
      }
    ]
  })
}
</script>

<style>
</style>
