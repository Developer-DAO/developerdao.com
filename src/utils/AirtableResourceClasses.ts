// simplified airtable objects that work for our purposes
export interface AirtableResponse {
  _rawJson: string;
}
export interface Author {
  id: string;
  fields: {
    Name: string;
    'Developer DAO Member': boolean;
  };
}
export interface Blockchain {
  id: string;
  fields: {
    Name: string;
  };
}
export interface Category {
  id: string;
  fields: {
    Name: string;
  };
}
export interface Tag {
  id: string;
  fields: {
    Name: string;
  };
}
export interface Resource {
  id: string;
  fields: {
    Title: string;
    Curated: boolean;
    Source: string;
    Summary: string;
    Level: string;
    Blockchain: string[];
    Category: string[];
    Tags: string[];
    'Media Type': string;
    Author: string[];
    'Date Added': string;
    Contributor: string[];
    // for use with the view
    extendedAuthors?: { name: string; dev: boolean }[];
  };
}
