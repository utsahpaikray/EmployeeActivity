import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CashflowtableComponent } from '../cashflowtable/cashflowtable.component';

@Component({
  selector: 'app-dialog-dialog-overview-example-dialog',
  templateUrl: './dialog-dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-dialog-overview-example-dialog.component.scss']
})
export class DialogDialogOverviewExampleDialogComponent implements OnInit {
  public dialogtable =
    [
      {
      Date: '10/01/2019',
      TransactionID: '3497',
      TransactionType: 'Invoice',
      Num: '2054',
      ContactID: '169',
      ContactName: 'Chris',
      DueDate: '10/31/2019',
      Amount: 500,
      Balance: 500,
      PastDue: 17,
      Total: 15,
      AccountID: '35',
      AccountName: '1001 Accounts Receivable (A/R)',
      Description: '',
      ProjectionType: 3
      },
      {
      Date: '10/01/2019',
      TransactionID: '3588',
      TransactionType: 'Invoice',
      Num: '2075',
      ContactID: '167',
      ContactName: 'Derrick',
      DueDate: '10/31/2019',
      Amount: 1328.27,
      Balance: 1328.27,
      PastDue: 17,
      Total: 15,
      AccountID: '35',
      AccountName: '1001 Accounts Receivable (A/R)',
      Description: '',
      ProjectionType: 3
      },
      {
      Date: '10/01/2019',
      TransactionID: '3592',
      TransactionType: 'Invoice',
      Num: '2079',
      ContactID: '59',
      ContactName: 'Jack',
      DueDate: '10/31/2019',
      Amount: 2726.85,
      Balance: 2726.85,
      PastDue: 17,
      Total: 15,
      AccountID: '35',
      AccountName: '1001 Accounts Receivable (A/R)',
      Description: '',
      ProjectionType: 3
      },
      {
      Date: '10/01/2019',
      TransactionID: '3604',
      TransactionType: 'Invoice',
      Num: '2091',
      ContactID: '50',
      ContactName: 'Rebecca Waltz',
      DueDate: '10/31/2019',
      Amount: 1900,
      Balance: 1900,
      PastDue: 17,
      Total: 15,
      AccountID: '35',
      AccountName: '1001 Accounts Receivable (A/R)',
      Description: '',
      ProjectionType: 3
      },
      {
      Date: '09/01/2019',
      TransactionID: '3582',
      TransactionType: 'Invoice',
      Num: '2069',
      ContactID: '60',
      ContactName: 'Anna',
      DueDate: '10/31/2019',
      Amount: 1300,
      Balance: 1300,
      PastDue: 17,
      Total: 15,
      AccountID: '35',
      AccountName: '1001 Accounts Receivable (A/R)',
      Description: '',
      ProjectionType: 3
      },
      {
      Date: '10/01/2019',
      TransactionID: '3606',
      TransactionType: 'Invoice',
      Num: '2093',
      ContactID: '34',
      ContactName: 'Rebecca\'s Garden',
      DueDate: '10/31/2019',
      Amount: 1233.38,
      Balance: 1233.38,
      PastDue: 17,
      Total: 15,
      AccountID: '35',
      AccountName: '1001 Accounts Receivable (A/R)',
      Description: '',
      ProjectionType: 3
      },
      {
      Date: '10/01/2019',
      TransactionID: '3498',
      TransactionType: 'Invoice',
      Num: '2055',
      ContactID: '169',
      ContactName: 'Chris',
      DueDate: '10/31/2019',
      Amount: 500,
      Balance: 500,
      PastDue: 17,
      Total: 15,
      AccountID: '35',
      AccountName: '1001 Accounts Receivable (A/R)',
      Description: '',
      ProjectionType: 3
      },
      {
      Date: '10/01/2019',
      TransactionID: '3584',
      TransactionType: 'Invoice',
      Num: '2071',
      ContactID: '145',
      ContactName: 'Beverage Vending Machine',
      DueDate: '10/31/2019',
      Amount: 1234.45,
      Balance: 1234.45,
      PastDue: 17,
      Total: 15,
      AccountID: '35',
      AccountName: '1001 Accounts Receivable (A/R)',
      Description: '',
      ProjectionType: 3
      },
      {
      Date: '10/01/2019',
      TransactionID: '3598',
      TransactionType: 'Invoice',
      Num: '2085',
      ContactID: '47',
      ContactName: 'Marry\'s store',
      DueDate: '10/31/2019',
      Amount: 2842.13,
      Balance: 2842.13,
      PastDue: 17,
      Total: 15,
      AccountID: '35',
      AccountName: '1001 Accounts Receivable (A/R)',
      Description: '',
      ProjectionType: 3
      },
      {
      Date: '10/01/2019',
      TransactionID: '3600',
      TransactionType: 'Invoice',
      Num: '2087',
      ContactID: '43',
      ContactName: 'Mike',
      DueDate: '10/31/2019',
      Amount: 800,
      Balance: 800,
      PastDue: 17,
      Total: 15,
      AccountID: '35',
      AccountName: '1001 Accounts Receivable (A/R)',
      Description: '',
      ProjectionType: 3
      }
      ]

  constructor(
    public dialogRef: MatDialogRef <DialogDialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}

