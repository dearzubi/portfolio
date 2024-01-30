
export const stringToSentences = (string, locale = 'en') => {
  const segmenter = new Intl.Segmenter(locale, { 
    granularity: 'sentence'
  });
  const segments = segmenter.segment(string);
  return Array.from(
      segments,
      s => s.segment
    )
}