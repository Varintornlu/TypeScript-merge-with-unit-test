export function Merge(col1 : number[], col2 : number[], col3 : number[]) : number[] {
    const result: number[] = [];
    let i = 0, j = 0, k = col3.length - 1, z = 0;
    const merge2: number[] = [];
    while (i < col1.length && j < col2.length) {
        if (col1[i]! <= col2[j]!){
            merge2.push(col1[i]!);
            i++;
        } else {
            merge2.push(col2[j]!);
            j++;
        }
    }
    while (i < col1.length) {
        merge2.push(col1[i]!);
        i++;
    }
    while (j < col2.length) {
        merge2.push(col2[j]!);
        j++;
    }
    while (k >= 0 && z < merge2.length) {
        if (merge2[z]! <= col3[k]!){
            result.push(merge2[z]!);
            z++;
        } else {
            result.push(col3[k]!);
            k--;
        }
    }
    while (z < merge2.length) {
        result.push(merge2[z]!);
        z++;
    }
    while (k >= 0) {
        result.push(col3[k]!);
        k--;
    }
    return result;
}
