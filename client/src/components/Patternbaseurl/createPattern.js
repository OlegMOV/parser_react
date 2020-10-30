export default function createPattern(pattern, date = new Date()) {
    let rubrics = pattern.split('##')
    let lines = rubrics[0].split(';').filter(w => w.length > 0)
    rubrics = (rubrics.length > 1 && rubrics[1].length > 0) ? rubrics[1].match(/\b[\w-]+\b/g) : null

    const makeDate = (line) => {
        return line
            .replace(/<Y{4}>/g, date.getFullYear())
            .replace('<YY>', date.getFullYear().toString().slice(-2))
            .replace(/<M{2}>/g, ('0' + (date.getMonth() + 1)).slice(-2))
            .replace(/<M>/g, date.getMonth() + 1)
            .replace(/<D{2}>/g, ('0' + date.getDate()).slice(-2))
            .replace(/<D>/g, date.getDate())
    }

    const makeRubrics = (line) => {
        return (rubrics === null) ? [line] : rubrics.map(x => line.replace("<rubric>", x))
    }

    const makePaginate = line => {
        if (line.search('<pg') < 0) return [line]
        try {
            let ptrn = line.match(/<pg[0-9,-]+>/g)[0]
            let [start, end, increment = '1'] = ptrn.slice(3, -1).split(',')
            if (isNaN(parseInt(start)) || isNaN(parseInt(end)) || isNaN(parseInt(increment)))
                return [line]
            let rez = []
            if (parseInt(increment) < 0) {
                console.log('minus')
                for (let i = +start; i >= +end; i += +increment) {
                    rez.push(line.replace(ptrn, i))
                }
                return rez
            }
            for (let i = +start; i <= +end; i += +increment) {
                rez.push(line.replace(ptrn, i))
            }
            return rez
        } catch (error) {
            return [line]
        }
    }

    if (Array.isArray(lines) && lines.length > 0) {
        let resault = []
        let temp = ''
        try {
            for (let line of lines) {
                temp = makeDate(line)
                for (let rubric of makeRubrics(temp)) {
                    resault.push(...makePaginate(rubric))
                }
            }
            return resault.map(item => [true, item])
        } catch (error) {
            return [
                [false, pattern]
            ]
        }
    }
    return pattern === '##' ? [
        [false, 'Не введено шаблон']
    ] : [
        [false, pattern]
    ]
}