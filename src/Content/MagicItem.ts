import {PropertyMetaData, PropertyType, SourceMaterial} from "./CommonAttributes";

const name: PropertyMetaData<string> = {
  propertyName: "name",
  example: "Staff of Purple",
  required: true,
  type: "string",
  use: "name of the magic item as it will be used by the sheet",
  longDescription:
    "This name will be used to recognize what is selected in the magic item drop-down. If you want more options for the magic item to be recognized as, see 'nameAlt' and 'nameTest' below.",
};

const sortName: PropertyMetaData<string> = {
  propertyName: "sortName",
  example: "Staff, Purple",
  required: false,
  type: "string",
  use: "name of the magic item as it will be shown in the menu for selecting magic items",
  minimumVersion: "v13.0.8",
  longDescription:
    "This name will only be used to display the item in the menu. This attribute is not used to recognize the item or fill the field on the sheet.",
};

const nameAlt: PropertyMetaData<string> = {
  propertyName: "nameAlt",
  example: "Staff of Colour Magic",
  required: false,
  type: "string",
  use: "alternative setting-independent name with which the sheet can recognize the magic item",
  longDescription:
    "This attribute is intended for magic items that have a name that is bound to a specific setting, to allow a name that is setting-neutral. For example, the \"Apparatus of Kwalish\" (DMG 151) is named after the legendary wizard \"Kwalish\" of the Greyhawk setting. As not everybody wants to use the Greyhawk name, the name as given in the SRD page 208 \"Apparatus of the Crab\" is good to provide as the 'nameAlt'. This name will also be used to recognize what is typed into the magic item drop-down. The shortest of the 'name', 'nameAlt', and 'nameTest' attributes will be used for the 'chooseGear' attribute, see below.",
};

const nameTestString: PropertyMetaData<string> = {
  propertyName: "nameTest",
  example: "Purple Staff",
  required: false,
  type: "string",
  use: "alternative name with which the sheet can recognize the magic item",
  longDescription: `This name will also be used to recognize what is typed into the magic item drop-down. The shortest of the 'name', 'nameAlt', and 'nameTest' attributes will be used for the 'chooseGear' attribute, see below. Note that it will only be used for chooseGear if it is a string.`,
};

const nameTestRegExp: PropertyMetaData<string> = {
  propertyName: "nameTest",
  example:
    "/^(?=.*staff)(?=.*magic)(?=.*(green|red|blue|orange|yellow|pink))).*$/i",
  required: false,
  type: "RegEx",
  use: "alternative name with which the sheet can recognize the magic item",
  longDescription: `This name will also be used to recognize what is typed into the magic item drop-down. The shortest of the 'name', 'nameAlt', and 'nameTest' attributes will be used for the 'chooseGear' attribute, see below. Note that it will only be used for chooseGear if it is a string.`,
};

const source: PropertyMetaData<SourceMaterial> = {
  propertyName: "source",
  example: ["HB", 0],
  required: true,
  type: "SourceMaterial",
  use: "define where the magic item is found",
  longDescription:
    'This attribute is used by the sheet to determine if the magic item should be available depending on the sources included and excluded. This array has two entries, a string followed by a number:\n\n1. string: The first entry has to be the object name of a SourceList object.\n2. number: The second entry is the page number to find the magic item at. This can be any number and is ignored if it is 0.\n\nIf a magic item is completely homebrew, or you don\'t want to make a custom source, you can use:\n\nsource: ["HB", 0],\n\n"HB" refers to the \'homebrew\' source.',
};

const defaultExcluded: PropertyMetaData<boolean> = {
  propertyName: "defaultExcluded",
  example: true,
  required: false,
  type: "boolean",
  use: "whether this magic item should be excluded by default (true) or included by default (false)",
  longDescription:
    "Include this attribute and set it to true if the magic item should appear in the Excluded list of the Source Selection Dialog when the script is added for the first time. It will have to be manually set to be included before it is used by the sheet's automation. The user will be made aware of this exclusion. This is useful for optional magic items that you wouldn't normally want to use (e.g. playtest or campaign-specific). Setting this attribute to false is the same as not including this attribute.",
};

const type: PropertyMetaData<string> = {
  propertyName: "type",
  example: "wondrous item",
  required: true,
  type: "string",
  use: "define what type the magic item is, to be used in the tooltip and to sort the item",
  allowedValues: [
    "wondrous item",
    "armor",
    "shield",
    "weapon",
    "ring",
    "rod",
    "staff",
    "wand",
    "potion",
    "scroll",
  ],
};

const rarity: PropertyMetaData<string> = {
  propertyName: "rarity",
  example: "rare",
  required: true,
  type: "string",
  use: "define what rarity the magic item is, to be used in the tooltip and to sort the item",
  allowedValues: [
    "common",
    "uncommon",
    "rare",
    "very rare",
    "legendary",
    "artifact",
  ],
};

const attunement: PropertyMetaData<boolean> = {
  propertyName: "attunement",
  example: true,
  required: false,
  type: "boolean",
  use: "set to true if the magic item requires attunement",
  longDescription:
    "If the magic item doesn't require attunement, you can just leave this attribute out. Setting this to false is the same as not including this attribute.",
};

const weight: PropertyMetaData<number> = {
  propertyName: "weight",
  example: 12,
  required: false,
  type: "number",
  use: "the weight of the magic item in lb",
  longDescription:
    "If the magic item doesn't have a listed weight, you can just leave this attribute out. Setting this to 0 is the same as not including this attribute.",
};

const prerequisite: PropertyMetaData<string> = {
  propertyName: "prerequisite",
  example: "Requires attunement by a dwarf",
  required: false,
  type: "string",
  use: "textual explanation of a prerequisite the item has",
  longDescription:
    'If the magic item doesn\'t have a prerequisite, you can just leave this attribute out. Setting this to "" is the same as not including this attribute.',
};

const allowDuplicates: PropertyMetaData<boolean> = {
  propertyName: "allowDuplicates",
  example: true,
  required: false,
  type: "boolean",
  use: "set to true if multiples can exist of this magic item (e.g. a potion or using 'choices' attribute)",
  longDescription:
    "If the magic item doesn't allow duplicates, you can just leave this attribute out. Setting this to false is the same as not including this attribute.\n\nIMPORTANT NOTE IF USING 'choices' ATTRIBUTE\nWhen this item has multiple forms and uses the 'choices' attribute, you probably want to set the 'allowDuplicates' attribute to true. If you don't set this attribute to true, the sheet will only allow this item to exist once, regardless if another instance has another form (choices) selected.",
};

const description: PropertyMetaData<string> = {
  propertyName: "description",
  example:
    "As an action, command the jug to produce liquid; or an action to uncorked it and pour 2 gal/min. After producing, it only makes the same up to its max, until next dawn. Oil (1 qt), acid (8 fl oz), basic poison (1/2 fl oz), beer (4 gal), honey/wine (1 gal), fresh water (8 gal), mayonnaise/vinegar (2 gal), salt water (12 gal).",
  required: true,
  type: "string",
  use: "the text to be filled in the description field of the magic item",
  longDescription:
    "Note that the sheet normally uses the first person for this. Make sure that this description is not too long and fits on the small description field on the 3rd page. The Printer Friendly sheets have less space for Magic Item descriptions than the Colourful versions, so use the Printer Friendly sheets to test if the description fits. Note that the space for magic item descriptions on the overflow is much larger than on the 3rd page, however, this description needs to fit in the description section on the 3rd page.",
};

const descriptionLong: PropertyMetaData<string> = {
  propertyName: "descriptionLong",
  example:
    "A heavy ceramic jug. As an action, the jug can be commanded to hold a chosen liquid. With another action, I can uncork the jug and pour the liquid out at 2 gallons per minute. Once commanded to produce a liquid, it can't produce a different one or more than the maximum of one, until the next dawn.\nLiquids (with maximum): acid (8 fl. oz.), basic poison (1/2 fl. oz.), beer (4 gallons), honey (1 gallon), mayonnaise (2 gallons), oil (1 quart), vinegar (2 gallons), fresh water (8 gallons), salt water (12 gallons), wine (1 gallon).",
  required: false,
  type: "string",
  use: "the text to be filled in the description field of the magic item, but only on the overflow page",
  longDescription:
    "Use this attribute in addition to the 'description' attribute. This attribute will only be used when the magic item is added on the overflow page, for the third page the 'description' attribute will be used. Only use this attribute if a longer description on the overflow page makes sense. There is no reason to have the 'description' and 'descriptionLong' be the same. Note that the sheet normally uses the first person for this. Make sure that this description is not too long and fits on the description field on the overflow page. The Printer Friendly sheets have less space for Magic Item descriptions than the Colourful versions, so use the Printer Friendly sheets to test if the description fits.",
};

const descriptionFull: PropertyMetaData<string> = {
  propertyName: "descriptionFull",
  example: "You have a swimming speed of 40 feet while wearing this ring.",
  required: false,
  type: "string",
  use: "description of the magic item as it appears in its source",
  longDescription:
    "This text is used to populate the tooltip of the magic items so that the original description can be read. This description will also be available in a pop-up by using the button in the item's line. There is no limit to how big this description can be, but very long descriptions will not always display correctly.",
};

export const MagicItemProperties: PropertyMetaData<PropertyType>[] = [
  name,
  sortName,
  nameAlt,
  nameTestString,
  nameTestRegExp,
  source,
  defaultExcluded,
  type,
  rarity,
  attunement,
  weight,
  prerequisite,
  allowDuplicates,
  description,
  descriptionLong,
  descriptionFull,
];