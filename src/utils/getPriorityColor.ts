

export const getPriorityColor = (priority: string) => {
    if(priority === 'Low'){
        return {
            background: '#FFDEDC',
            color: '#F2564B'
        }
    }

    if(priority === 'Medium'){
        return {
            background: '#FFFEEB',
            color: '#907F0A'
        }
    }

    if(priority === 'High'){
        return {
            background: '#F1FEEB',
            color: '#1D8935'
        }
    }
}