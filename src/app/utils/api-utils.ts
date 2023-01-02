export const SERVER_URL = 'http://localhost:8081';

export enum Fields {
  AGE = `Age`,
  FUNDING = `Funding`,
  SIZE = `Size`,
  USER_SCORING = `User scoring`
}

export enum ApiActions {
  CALCULATE = `calculate`,
  GET_ALL = `getAll`,
  SET = `set`
}

export enum ApiFields {
  AGE = `age`,
  FUNDING = `funding`,
  SIZE = `size`,
  USER_SCORING = `userScoring`,
  PLACEHOLDER = ``
}

export const FIELDS_TO_API_FIELDS: Map<Fields, ApiFields> = new Map([
  [Fields.AGE, ApiFields.AGE],
  [Fields.FUNDING, ApiFields.FUNDING],
  [Fields.SIZE, ApiFields.SIZE],
  [Fields.USER_SCORING, ApiFields.USER_SCORING]]);
