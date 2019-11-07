import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EmployeelistComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'designation', 'experience', 'behaviour'];
  expandedElement: PeriodicElement | null;
  color: string;

}

export interface PeriodicElement {
  name: string;
  designation: string;
  experience: number;
  behaviour: string;
  description: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'John',
    designation: 'Angular developer',
    experience: 1,
    behaviour: 'H',
    description: `Hydrogen is a chemical element with behaviour H and atomic number 1. With a standard
      atomic experience of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    name: 'John',
    designation: 'Web designer',
    experience: 4,
    behaviour: 'He',
    description: `Helium is a chemical element with behaviour He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  }, {
    name: 'John',
    designation: 'Graphics designer',
    experience: 6,
    behaviour: 'Li',
    description: `Lithium is a chemical element with behaviour Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }, {
    name: 'John',
    designation: 'Web designer',
    experience: 9,
    behaviour: 'Be',
    description: `Beryllium is a chemical element with behaviour Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
  }, {
    name: 'John',
    designation: 'Php Developer',
    experience: 10,
    behaviour: 'B',
    description: `Boron is a chemical element with behaviour B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`
  }, {
    name: 'John',
    designation: 'Angular developer',
    experience: 12,
    behaviour: 'C',
    description: `Carbon is a chemical element with behaviour C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
  }, {
    name: 'John',
    designation: 'Nitrogen',
    experience: 14,
    behaviour: 'N',
    description: `Nitrogen is a chemical element with behaviour N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
  }, {
    name: 'John',
    designation: 'Angular developer',
    experience: 15,
    behaviour: 'O',
    description: `Oxygen is a chemical element with behaviour O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
  }, {
    name: 'John',
    designation: 'Web designer',
    experience: 18,
    behaviour: 'F',
    description: `Fluorine is a chemical element with behaviour F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`
  }, {
    name: 'John',
    designation: 'Neon',
    experience: 20,
    behaviour: 'Ne',
    description: `Neon is a chemical element with behaviour Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  },
];
