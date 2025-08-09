// Average reading speed ~200 words/minute
const WORDS_PER_MINUTE = 200;

function extractTextFromContent(content: any[]): string {
  if (!Array.isArray(content)) return '';
  const texts: string[] = [];
  for (const block of content) {
    const { __component, ...rest } = block || {};
    if (__component === 'content.paragraph' && rest?.text) {
      // richtext may contain HTML; strip tags crudely
      texts.push(String(rest.text).replace(/<[^>]*>/g, ' '));
    } else if (__component === 'content.heading' && rest?.text) {
      texts.push(String(rest.text));
    } else if (__component === 'content.pullquote' && rest?.quote) {
      texts.push(String(rest.quote));
    } else if (__component === 'content.methodologyBlock' && rest?.description) {
      texts.push(String(rest.description).replace(/<[^>]*>/g, ' '));
    }
    // images and data-viz do not add reading words
  }
  return texts.join(' ');
}

function computeReadingTimeFromBody(entry: any): number {
  const content = entry?.content || [];
  const lead = entry?.lead || '';
  const text = [lead, extractTextFromContent(content)].join(' ').trim();
  if (!text) return 0;
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

const lifecycles = {
  async beforeCreate(event) {
    const { data } = event.params;
    data.reading_time = computeReadingTimeFromBody(data);
  },
  async beforeUpdate(event) {
    const { data } = event.params;
    if (data) {
      data.reading_time = computeReadingTimeFromBody(data);
    }
  },
};

export default lifecycles;