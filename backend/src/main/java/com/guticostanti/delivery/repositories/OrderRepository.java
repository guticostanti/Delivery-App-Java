package com.guticostanti.delivery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.guticostanti.delivery.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
