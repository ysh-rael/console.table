function padValue(value, width) {
    const stringValue = String(value)
    const padding = ' '.repeat(width - stringValue.length)
    return stringValue + padding
}

function consoleTable(data, exibeObject) {
    const columns = []
    const rows = []
    
    for (const key in data[0]) columns.push(key); // Extrair as chaves (colunas) do primeiro objeto
   
    for (const obj of data) {  // Criar as linhas com os valores de cada objeto
        const row = []
        for (const key of columns)
            row.push(typeof obj[key] === 'object' && exibeObject ? JSON.stringify(obj[key]) : obj[key])
        rows.push(row)
    }

    const columnWidths = columns.map((column, index) => { // Calcular o tamanho máximo de cada coluna
        const values = rows.map(row => String(row[index]))
        const maxLength = Math.max(column.length, ...values.map(value => value.length))
        return maxLength
    });

    // Exibir
    const separator = '+' + columnWidths.map(width => '-'.repeat(width + 2)).join('+') + '+'

    console.log(separator)
    console.log('| ' + columns.map((column, index) => padValue(column, columnWidths[index])).join(' | ') + ' |')
    console.log(separator)

    for (const row of rows)
        console.log('| ' + row.map((value, index) => padValue(value, columnWidths[index])).join(' | ') + ' |')

    console.log(separator);
}

const setConsoleTable = () => console.table = consoleTable
