resource "google_container_cluster" "k8s-cluster" {
    name     = "k8s-cluster"
    location = "us-east1-c"
    initial_node_count = 1

    addons_config {
    http_load_balancing {
        disabled = false
    }
  }
}