# https://registry.terraform.io/providers/hashicorp/google/latest/docs
provider "google" {
    project = "csci-5409-427620"
    region = "us-east1"
}
    
terraform {
    required_providers {
    google = {
        source = "hashicorp/google"
        version = "~> 4.0"
    }
  }
}