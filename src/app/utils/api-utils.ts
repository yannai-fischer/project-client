export const SERVER_URL = 'http://localhost:8081';

export enum Fields {
  AGE = `Age`,
  FUNDING = `Funding`,
  SIZE = `Size`,
  USER_SCORE = `User score`
}

export enum ApiFields {
  AGE = `age`,
  FUNDING = `funding`,
  SIZE = `size`,
  USER_SCORE = `userScore`,
  PLACEHOLDER = ``
}

export const FIELDS_TO_API_FIELDS: Map<Fields, ApiFields> = new Map([
  [Fields.AGE, ApiFields.AGE],
  [Fields.FUNDING, ApiFields.FUNDING],
  [Fields.SIZE, ApiFields.SIZE],
  [Fields.USER_SCORE, ApiFields.USER_SCORE]]);

export enum ApiActions {
  CALCULATE = `calculate`,
  GET_ALL = `getAll`,
  SET = `set`
}
