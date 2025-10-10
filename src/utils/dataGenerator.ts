import { faker } from '@faker-js/faker';

export type DataType = string;

// 스키마를 파싱하여 타입 맵 생성
export function parseSchema(schemaString: string): Record<string, DataType> | null {
  try {
    const schema = JSON.parse(schemaString);
    return schema;
  } catch (error) {
    console.error('Schema parsing error:', error);
    return null;
  }
}

// 데이터 타입에 따라 적절한 가짜 데이터 생성
function generateValueByType(type: string): any {
  const lowerType = type.toLowerCase();

  switch (lowerType) {
    // 개인 정보
    case 'name':
      return faker.person.fullName();
    case 'firstname':
      return faker.person.firstName();
    case 'lastname':
      return faker.person.lastName();
    case 'email':
      return faker.internet.email();
    case 'phone':
      return faker.phone.number();
    case 'address':
      return faker.location.streetAddress();
    case 'city':
      return faker.location.city();
    case 'country':
      return faker.location.country();
    case 'zipcode':
      return faker.location.zipCode();
    case 'avatar':
      return faker.image.avatar();
    
    // 회사/직업
    case 'company':
      return faker.company.name();
    case 'jobtitle':
      return faker.person.jobTitle();
    
    // ID/고유값
    case 'uuid':
      return faker.string.uuid();
    case 'id':
      return faker.string.uuid();
    case 'mongoid':
      return faker.database.mongodbObjectId();
    
    // 숫자
    case 'number':
      return faker.number.int({ min: 1, max: 1000 });
    case 'price':
      return parseFloat(faker.commerce.price());
    case 'rating':
      return parseFloat(faker.number.float({ min: 1, max: 5, fractionDigits: 1 }).toFixed(1));
    case 'smallnumber':
      return faker.number.int({ min: 1, max: 100 });
    case 'bignumber':
      return faker.number.int({ min: 1000, max: 1000000 });
    case 'float':
    case 'decimal':
      return faker.number.float({ min: 0, max: 1000, fractionDigits: 2 });
    
    // 날짜/시간
    case 'date':
      return faker.date.recent().toISOString();
    case 'datetime':
      return faker.date.recent().toISOString();
    case 'past':
      return faker.date.past().toISOString();
    case 'future':
      return faker.date.future().toISOString();
    
    // 불리언
    case 'boolean':
      return faker.datatype.boolean();
    
    // 텍스트
    case 'title':
      return faker.lorem.sentence({ min: 3, max: 8 }).slice(0, -1);
    case 'sentence':
      return faker.lorem.sentence();
    case 'paragraph':
      return faker.lorem.paragraph();
    case 'text':
      return faker.lorem.text();
    case 'word':
      return faker.lorem.word();
    case 'words':
      return faker.lorem.words();
    
    // 추가 이름 타입
    case 'firstname':
      return faker.person.firstName();
    case 'lastname':
      return faker.person.lastName();
    
    // 제품 관련
    case 'productname':
      return faker.commerce.productName();
    case 'productdescription':
      return faker.commerce.productDescription();
    case 'category':
      return faker.commerce.department();
    case 'color':
      return faker.color.human();
    
    // 배열/태그
    case 'tags':
      return Array.from({ length: faker.number.int({ min: 2, max: 5 }) }, () => faker.word.noun());
    
    // URL/인터넷
    case 'url':
      return faker.internet.url();
    case 'username':
      return faker.internet.username();
    case 'domain':
      return faker.internet.domainName();
    case 'ip':
      return faker.internet.ip();
    
    // 상태
    case 'orderstatus':
      return faker.helpers.arrayElement(['pending', 'processing', 'shipped', 'delivered', 'cancelled']);
    case 'status':
      return faker.helpers.arrayElement(['active', 'inactive', 'pending', 'completed']);
    
    // 기본값
    default:
      return faker.lorem.word();
  }
}

// 단일 객체 생성
export function generateSingleObject(schema: Record<string, DataType>): Record<string, any> {
  const result: Record<string, any> = {};
  
  for (const [key, type] of Object.entries(schema)) {
    result[key] = generateValueByType(type);
  }
  
  return result;
}

// 여러 객체 생성
export function generateMockData(schemaString: string, count: number): string {
  const schema = parseSchema(schemaString);
  
  if (!schema) {
    throw new Error('Invalid schema format. Please check your JSON syntax.');
  }

  const data = Array.from({ length: count }, () => generateSingleObject(schema));
  
  return JSON.stringify(data, null, 2);
}

