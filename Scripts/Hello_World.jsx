var myDocument = app.documents.add();
var myTextFrame = myDocument.textFrames.add();
var point = new Point(0, 0);
myTextFrame.position = point;
myTextFrame.contents = "Hello World";

const activeDocumentReference = app.activeDocument;
const documentWidth = activeDocumentReference.width;
var textFrameReference = activeDocumentReference.textFrames[0];
textFrameReference.width = documentWidth;