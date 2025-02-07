import Formatter from '../core/Formatter';
import Tokenizer from '../core/Tokenizer';

const reservedWords = [
  'ADD',
  'ALL',
  'ALTER',
  'AND',
  'ANY',
  'AS',
  'ASC',
  'AUTHORIZATION',
  'BACKUP',
  'BEGIN',
  'BETWEEN',
  'BREAK',
  'BROWSE',
  'BULK',
  'BY',
  'CASCADE',
  'CASE',
  'CHECK',
  'CHECKPOINT',
  'CLOSE',
  'CLUSTERED',
  'COALESCE',
  'COLLATE',
  'COLUMN',
  'COMMIT',
  'COMPUTE',
  'CONSTRAINT',
  'CONTAINS',
  'CONTAINSTABLE',
  'CONTINUE',
  'CONVERT',
  'COUNT',
  'CREATE',
  'CROSS',
  'CURRENT',
  'CURRENT_DATE',
  'CURRENT_TIME',
  'CURRENT_TIMESTAMP',
  'CURRENT_USER',
  'CURSOR',
  'DATABASE',
  'DBCC',
  'DEALLOCATE',
  'DECLARE',
  'DEFAULT',
  'DELETE',
  'DENY',
  'DESC',
  'DISK',
  'DISTINCT',
  'DISTRIBUTED',
  'DOUBLE',
  'DROP',
  'DUMP',
  'ELSE',
  'END',
  'ERRLVL',
  'ESCAPE',
  'EXCEPT',
  'EXEC',
  'EXECUTE',
  'EXISTS',
  'EXIT',
  'EXTERNAL',
  'FETCH',
  'FILE',
  'FILLFACTOR',
  'FOR',
  'FOREIGN',
  'FREETEXT',
  'FREETEXTTABLE',
  'FROM',
  'FULL',
  'FUNCTION',
  'GOTO',
  'GRANT',
  'GROUP',
  'HAVING',
  'HOLDLOCK',
  'IDENTITY',
  'IDENTITYCOL',
  'IDENTITY_INSERT',
  'IF',
  'IN',
  'INDEX',
  'INNER',
  'INSERT',
  'INTERSECT',
  'INTO',
  'IS',
  'JOIN',
  'KEY',
  'KILL',
  'LEFT',
  'LIKE',
  'LINENO',
  'LOAD',
  'MERGE',
  'NATIONAL',
  'NOCHECK',
  'NONCLUSTERED',
  'NOT',
  'NULL',
  'NULLIF',
  'OF',
  'OFF',
  'OFFSETS',
  'ON',
  'OPEN',
  'OPENDATASOURCE',
  'OPENQUERY',
  'OPENROWSET',
  'OPENXML',
  'OPTION',
  'OR',
  'ORDER',
  'OUTER',
  'OVER',
  'PERCENT',
  'PIVOT',
  'PLAN',
  'PRECISION',
  'PRIMARY',
  'PRINT',
  'PROC',
  'PROCEDURE',
  'PUBLIC',
  'RAISERROR',
  'READ',
  'READTEXT',
  'RECONFIGURE',
  'REFERENCES',
  'REPLICATION',
  'RESTORE',
  'RESTRICT',
  'RETURN',
  'REVERT',
  'REVOKE',
  'RIGHT',
  'ROLLBACK',
  'ROWCOUNT',
  'ROWGUIDCOL',
  'RULE',
  'SAVE',
  'SCHEMA',
  'SECURITYAUDIT',
  'SELECT',
  'SEMANTICKEYPHRASETABLE',
  'SEMANTICSIMILARITYDETAILSTABLE',
  'SEMANTICSIMILARITYTABLE',
  'SESSION_USER',
  'SET',
  'SETUSER',
  'SHUTDOWN',
  'SOME',
  'STATISTICS',
  'SYSTEM_USER',
  'TABLE',
  'TABLESAMPLE',
  'TEXTSIZE',
  'THEN',
  'TO',
  'TOP',
  'TRAN',
  'TRANSACTION',
  'TRIGGER',
  'TRUNCATE',
  'TRY_CONVERT',
  'TSEQUAL',
  'UNION',
  'UNIQUE',
  'UNPIVOT',
  'UPDATE',
  'UPDATETEXT',
  'USE',
  'USER',
  'VALUES',
  'VARYING',
  'VIEW',
  'WAITFOR',
  'WHEN',
  'WHERE',
  'WHILE',
  'WITH',
  'WITHIN GROUP',
  'WRITETEXT',
];

const reservedTopLevelWords = [
  'ADD',
  'ALTER COLUMN',
  'ALTER TABLE',
  'CASE',
  'DELETE FROM',
  'END',
  'EXCEPT',
  'FROM',
  'GROUP BY',
  'HAVING',
  'INSERT INTO',
  'INSERT',
  'LIMIT',
  'ORDER BY',
  'SELECT',
  'SET CURRENT SCHEMA',
  'SET SCHEMA',
  'SET',
  'UPDATE',
  'VALUES',
  'WHERE',
];

const reservedTopLevelWordsNoIndent = [
  'GO',
  'INTERSECT',
  'INTERSECT ALL',
  'MINUS',
  'UNION',
  'UNION ALL',
];

const reservedNewlineWords = [
  'AND',
  'ELSE',
  'OR',
  'WHEN',
  // joins
  'JOIN',
  'INNER JOIN',
  'LEFT JOIN',
  'LEFT OUTER JOIN',
  'RIGHT JOIN',
  'RIGHT OUTER JOIN',
  'FULL JOIN',
  'FULL OUTER JOIN',
  'CROSS JOIN',
];

export default class TSqlFormatter extends Formatter {
  tokenizer() {
    return new Tokenizer({
      reservedWords,
      reservedTopLevelWords,
      reservedNewlineWords,
      reservedTopLevelWordsNoIndent,
      stringTypes: [`""`, "N''", "''", '[]'],
      openParens: ['(', 'CASE'],
      closeParens: [')', 'END'],
      indexedPlaceholderTypes: [],
      namedPlaceholderTypes: ['@'],
      lineCommentTypes: ['--'],
      specialWordChars: ['#', '@'],
      operators: [
        '>=',
        '<=',
        '<>',
        '!=',
        '!<',
        '!>',
        '+=',
        '-=',
        '*=',
        '/=',
        '%=',
        '|=',
        '&=',
        '^=',
        '::',
      ],
      // TODO: Support for money constants
    });
  }
}
