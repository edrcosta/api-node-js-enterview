import * as formatCurrency from 'format-currency';

export class Currency{

    static normalizeDB (val){
        val = val.replace(new RegExp(',', 'g'), '.').replace(/[^\d.-]/g, '').split('.');                
        let decimal = val.pop();
        return `${val.join('')}.${decimal}`;
    }

    static formatReal (value : any){

        let opts = { format: '%s%v', symbol: 'R$ ', locale: 'de-DE' }
        let val = formatCurrency(value, opts);
        val = val.split('.');
        val[0] = val[0].split(',').join('.');
        return val.join(',');
    }
}   