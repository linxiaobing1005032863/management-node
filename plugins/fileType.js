module.exports = function () {
    var count = arguments[0];
    var $self = arguments[1];
    var fileName = count.path.substring(count.path.lastIndexOf('/')+1);
    switch(count.fileType){
        case "PNG":
            $self.set('content-type', 'image/png;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            break;
        case "TXT":
            $self.set('Content-Type', 'text/plain;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            break;
        case "UNKNOW":
            $self.set('content-type', 'application/msword;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            break;
        case "DOC":
            $self.set('content-type', 'application/msword;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            break;
        case "XLSX":
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            break;
        case "XLS":
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            break;
        case "PDF":
            $self.set('content-type', 'application/pdf;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            break;
        case "JPG":
            $self.set('content-type', 'application/x-jpg;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            break;
        case "JPEG":
            $self.set('content-type', 'image/jpeg;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            break;
        case "ZIP":
            $self.set('content-type', 'application/x-zip-compressed;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            break;
        case "RAR":
            $self.set('content-type', 'application/octet-stream;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            break;
        case "ODT":
            $self.set('content-type', 'application/vnd.oasis.opendocument.text;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            break;
    }
}