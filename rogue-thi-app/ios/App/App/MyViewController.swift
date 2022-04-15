//
//  MyViewController.swift
//  neuland.app
//
//  Created by Robert Eggl on 15.04.22.
//

import UIKit
import Capacitor

class MyViewController: CAPBridgeViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        webView!.allowsBackForwardNavigationGestures = true
        
    }
    
}
