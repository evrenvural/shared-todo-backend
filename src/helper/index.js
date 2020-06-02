import { uuid } from 'uuidv4';

export async function generateUniqueCode(Model) {
  // Nested function
  const isUnique = async generatedCode => {
    for await (const item of Model.find()) {
      if (item.code === generatedCode) return false;
    }
    return true;
  };

  // Main
  let generatedCode = '';
  let isUniqueControl = false;

  do {
    generatedCode = `#${uuid().substring(0, 4)}`;
    isUniqueControl = await isUnique(generatedCode);
  } while (!isUniqueControl);

  return generatedCode;
}
