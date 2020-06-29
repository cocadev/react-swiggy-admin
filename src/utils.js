import _ from "underscore";
import Chance from "chance";
const chance = new Chance();

class UtilService {
    static filterParam(data, categoriesData) {
        if(!data){return ''}
        let mapping = _.find(categoriesData, (u)=>{
            return u.category_name === data.category
        });
        return mapping;
    }

    static filterParamCountry(data, item) {
        if(!data){return ''}
        let mapping = _.find(item, (u)=>{
            return u.value === data.country
        });
        return mapping;
    }

    static filterParamCity(data, item) {
        if(!data){return ''}
        let mapping = _.find(item, (u)=>{
            return u.value === data.city
        });
        return mapping;
    }

    static getDataById(id, list) {
        if(!id){return ''}
        let mapping = _.find(list, (u)=>{
            return u.id == id // Do not change this !!!
        });
        return mapping;
    }

    static getColumns(data) {
        const columns = [];
        const sample = data[0];
        sample&&Object.keys(sample).forEach(key => {
            if (key !== "_id") {
                columns.push({
                    accessor: key,
                    Header: key
                });
            }
        });
        return columns;
    }

    static getData(testData) {
        const data = testData.map(item => {
            const _id = chance.guid();
            return {
                _id,
                ...item
            };
        });
        return data;
    }
}

export default UtilService
