resource "google_container_node_pool" "general" {
  name = "general"
  cluster = google_container_cluster.k8s-cluster.id
  node_count = 1

  node_config {
    preemptible = true
    machine_type = "e2-standard-2"
    disk_type = "pd-standard"
    disk_size_gb = 10
  }
}