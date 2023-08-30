

export const isValidUrl = (urlString:string)=> {
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
  '((\\d{1,3}\\.){3}\\d{1,3}))'+
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
  '(\\?[;&a-z\\d%_.~+=-]*)?'+
  '(\\#[-a-z\\d_]*)?$','i');
return !!urlPattern.test(urlString);
}

export const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
}


export const getCleanDomainFromOrigin = (origin: string) =>{
    const withoutHttp = origin.replace(/(^\w+:|^)\/\//, '');
    const withoutWWW = withoutHttp.replace(/^www\./, '');
    const parts = withoutWWW.split('.');
    if (parts.length > 1) {
        return parts[parts.length - 2] + '.' + parts[parts.length - 1];
    }
    return withoutWWW;
}