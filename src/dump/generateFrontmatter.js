import serializeData from './serializeData';

export default function generateFrontmatter(format, data) {
  switch (format) {
    case 'yaml':
    case 'yml':
      return `---\n${serializeData(format, data)}\n---\n\n`;

    case 'toml':
      return `+++\n${serializeData(format, data)}\n+++\n\n`;

    case 'json':
      return `${serializeData(format, data)}\n\n`;

    default:
      throw new Error(`Unsupported format: ${format}`);
  }
}
