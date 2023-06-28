export type PropertyType = string | number | boolean | SourceMaterial | Action[]
export interface PropertyMetaData<T extends PropertyType > {
    propertyName: string
    example: T
    required: boolean
    type: 'string' | 'number' | 'RegEx' | 'SourceMaterial' | 'boolean' | 'Action'
    use: string
    minimumVersion?: string
    longDescription?: string
    allowedValues?: string[]
}

export type SourceMaterial = [string, number];

type ActionType = 'action' | 'bonus action' | 'reaction';
type Action = [ActionType, string]

const action:PropertyMetaData<Action[]> = {
    propertyName: 'action',
    example: [
        ["reaction", " (start)"],
        ["bonus action", "Shove"]
    ],
    required: false,
    type: 'Action',
    use: 'add entry to the "Actions", "Bonus Actions", or "Reactions" section on the 1st page',
    longDescription: 'The entries in this array must always be arrays with 2 strings each:\n' +
        '\t1. The first string in each sub-array is the type of action, written in lowercase.\n' +
        '\t\tThe options are "action", "bonus action", or "reaction".\n' +
        '\t2. The second string can be one of two things:\n' +
        '\t\t2.1\tWhen the first character of the string is non-alphabetic (e.g. a space or a hyphen), it is amended to the name of the feature.\n' +
        '\t\t\tThis amended total is then added as an action.\n' +
        '\t\t\tIf you are also using the \'limfeaname\' attribute, that string will be used instead of the feature\'s name.\n' +
        '\t\t\tSo this entry will be added to \'limfeaname\' string.\n' +
        '\t\t2.2 When the first character of the string is an alphabetic character (e.g. everything from a-Z), it is not amended to the name of the feature.\n' +
        '\t\t\tThe string is taken as-is and added as an action.'
}