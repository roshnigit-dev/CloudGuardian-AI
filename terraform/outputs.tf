output "vpc_id" {
  description = "The ID of the CloudGuardian VPC"
  value       = aws_vpc.cloudguardian_vpc.id
}