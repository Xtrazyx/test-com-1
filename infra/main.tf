terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  shared_credentials_files = ["/home/xtrazyx/.aws/credentials"]
  profile = "terraform"
  region = "eu-west-3"
}

resource "aws_instance" "app_server" {
  ami = "ami-05b457b541faec0ca"
  instance_type = "t2.micro"

  tags = {
    Name = "Test-com-1"
  }
}

variable "env_prefix_name" {
  type        = "string"
  description = "please enter the environment name for example demo, nodejsapp etc this will be use as prefix for example demo.example.com etc"
  default     = "demo"
}

# region for aws deployment

variable "region" {
  default     = "us-west-1"
  type        = "string"
  description = "Region for VPC."
}
variable "USER_DATA_DIR" {
  type        = "string"
  description = "To place user data in the folder such users keys etc, make sure your deployment system is secure"
  default     = "./user-data"
}

# AWS profile that will be used for AWS account 
variable "aws_profile_name" {
  type        = "string"
  description = "please enter the AWS profile name by default will test"
  default     = "test"
}
