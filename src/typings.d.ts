/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

/**
 * Format of the individual note item
 */
interface NoteItem {
  uid: number; // Unique identifier. Setting its index at the time of insertion as index. It is unique and serves the purpose
  title: string; // title of the note
  content: string // content of the note
  timeStamp: string;
}