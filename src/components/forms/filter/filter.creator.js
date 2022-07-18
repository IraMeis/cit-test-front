import types from "../../../util/taskTypes.json";

const makeSearchRequest = (dfrom, dto, uuid, type) => {
    let list = [];

    const formatter = (date, sep) => {
        let mas = [date.substring(8, 10), date.substring(5, 7), date.substring(0, 4)];
        return mas.join(sep);
    }

    if(dfrom != null)
        list.push("from=" + formatter(dfrom.toString(), "."));

    if(dto != null)
        list.push("to=" + formatter(dto.toString(), "."));

    if(uuid !== "")
        list.push("uuid=" + uuid);

    if(type == types.substring.code)
        list.push("inSubstring=true");
    else if(type == types.square.code)
        list.push("inSquare=true");
    else {
        list.push("inSubstring=true");
        list.push("inSquare=true");
    }

    let filter = list.join("&");
    return "?" + filter;
}

export default makeSearchRequest;
