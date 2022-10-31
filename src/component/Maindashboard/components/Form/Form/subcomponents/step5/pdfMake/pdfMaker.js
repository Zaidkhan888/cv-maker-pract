import pdfMake from "pdfmake/build/pdfmake";

export default function pdfMaker(data) {

  pdfMake.createPdf({content: 'Hi. I am a PDF.' + data }).open();
  // return pdfMake.createPdf(resume(data)).open();
}
