import libPoint from '../MeasuringPointLibrary';

export default function MeasuringPointDetailsUpperRange(pageClientAPI) {

    if (!pageClientAPI) {
        throw new TypeError('Context can\'t be null or undefined');
    }

    return libPoint.measuringPointDetailsFieldFormat(pageClientAPI, 'UpperRange');

}
