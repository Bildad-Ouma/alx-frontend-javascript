export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true; // No need to redeclare 'task'
    task2 = false; // No need to redeclare 'task2'
  }

  return [task, task2];
}
