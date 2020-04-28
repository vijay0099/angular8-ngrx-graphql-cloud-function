function checkDocumentNameMethod(method, data) {
  switch (method) {
    case 'Banana':
      text = 'Banana is good!';
      break;
    case 'Orange':
      text = 'I am not a fan of orange.';
      break;
    case 'Apple':
      text = 'How you like them apples?';
      break;
    default:
      text = 'I have never heard of that fruit...';
  }
}

objWithAddedIndex =
  method === 'MONOLITH'
    ? composeSimpleDocName(method, IndexDefinition, data)
    : objWithAddedIndex;
objWithAddedIndex =
  method === 'COMPOSITE'
    ? composeComplexDocName(method, IndexDefinition, data)
    : objWithAddedIndex;
objWithAddedIndex =
  method === 'AUTO'
    ? data // RETURN UNTOUCHED DATA
    : data; // RETURN UNTOUCHED DATA
