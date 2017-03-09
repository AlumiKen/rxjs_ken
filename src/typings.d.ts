/* SystemJS module definition */
declare var module: {
  id: string;
};

declare var Colors;
declare var Rickshaw;

//讓$叫用的plugIn略過檢查
interface JQuery {

  plot;

  easyPieChart;

  vectorMap;

  datepicker;

  knob;
}
