import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'cms-document-list',
  standalone: false,
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css',
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [];

  // documents: Document[] = [
  //   new Document(
  //     1,
  //     'ITM 111',
  //     'Introduction to Databases',
  //     'http://example.com/doc1'
  //   ),
  //   new Document(
  //     2,
  //     'PUBH 132',
  //     'Personal Health & Wellness',
  //     'http://example.com/doc2'
  //   ),
  //   new Document(
  //     3,
  //     'CSE 340',
  //     'Web Backend Development',
  //     'http://example.com/doc3'
  //   ),
  //   new Document(
  //     4,
  //     'WDD 430',
  //     'Web Full-Satack Development',
  //     'http://example.com/doc4'
  //   ),
  //   new Document(
  //     5,
  //     'ENG 150',
  //     'Writing-Reasoning Foundation',
  //     'http://example.com/doc5'
  //   ),
  // ];

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments();
    this.documentService.documentChangedEvent.subscribe(
      (documents: Document[]) => {
        this.documents = documents;
      }
    );
  }
}
